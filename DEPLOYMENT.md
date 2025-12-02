# 🚀 Deployment Guide - Hotel ABSA Dashboard

Panduan lengkap untuk membuat dashboard Hotel ABSA dapat diakses secara online oleh manajemen hotel.

## 🎯 Opsi Deployment

### 1. 🌐 Vercel (Recommended - Easiest)
**Keuntungan:**
- Free untuk personal use
- Auto-deployment dari GitHub
- SSL certificate otomatis
- Global CDN
- Zero configuration

**Cara Deploy:**
```bash
# 1. Push ke GitHub
git add .
git commit -m "Deploy Hotel ABSA Dashboard"
git push origin main

# 2. Deploy ke Vercel
npm i -g vercel
vercel

# Atau visit: https://vercel.com/new
# Connect GitHub repository
# Click Deploy
```

### 2. 🔵 Netlify (Free & Easy)
**Keuntungan:**
- Free hosting
- Continuous deployment
- Form handling
- SSL otomatis
- Custom domain

**Cara Deploy:**
```bash
# 1. Build project
npm run build

# 2. Deploy ke Netlify
npm i -g netlify-cli
netlify deploy --prod --dir=.next

# Atau drag & drop folder .next ke https://app.netlify.com/drop
```

### 3. 🐳 Docker + Cloud Hosting (Professional)
**Cloud Providers:**
- AWS (EC2, ECS, Lambda)
- Google Cloud Platform
- Microsoft Azure
- DigitalOcean
- Linode

**Dockerfile:**
```dockerfile
FROM node:18-alpine AS base

# Install dependencies
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

# Build the application
COPY . .
RUN npm run build

# Production image
FROM node:18-alpine AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=base /app/public ./public
COPY --from=base --app/.next/standalone ./
COPY --from=base /app/package.json ./package.json

USER nextjs

EXPOSE 3000

ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

CMD ["node", "server.js"]
```

**Docker Compose:**
```yaml
version: '3.8'
services:
  hotel-absa:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
    restart: unless-stopped
```

### 4. 🖥️ Self-Hosting (On-Premise)
**Untuk hotel yang ingin hosting di server sendiri:**

**Requirements:**
- Server dengan Node.js 18+
- Minimum 2GB RAM
- 20GB storage
- Static IP address
- Nginx (optional, untuk production)

**Setup:**
```bash
# 1. Setup server
sudo apt update
sudo apt install nodejs npm nginx

# 2. Clone dan build
git clone <your-repo>
cd hotel-absa-dashboard
npm install
npm run build

# 3. Setup PM2 (process manager)
npm install -g pm2
pm2 start npm --name "hotel-absa" -- start

# 4. Setup Nginx
sudo nano /etc/nginx/sites-available/hotel-absa
```

**Nginx Configuration:**
```nginx
server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

## 🔐 Security & Production Considerations

### Environment Variables
```env
# Production environment variables
NODE_ENV=production
NEXTAUTH_URL=https://your-domain.com
NEXTAUTH_SECRET=your-secret-key

# AI Configuration
ZAI_API_KEY=your_production_zai_key
ZAI_BASE_URL=https://api.z-ai.com

# Database (if using)
DATABASE_URL=your_production_database_url

# File Upload Security
MAX_FILE_SIZE=10MB
UPLOAD_DIR=/tmp/uploads
ALLOWED_ORIGINS=https://your-domain.com
```

### Security Headers
```javascript
// next.config.ts
const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on'
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload'
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block'
  },
  {
    key: 'X-Frame-Options',
    value: 'DENY'
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  }
]

module.exports = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ]
  },
}
```

## 🌍 Multi-Tenant Architecture

Untuk multiple hotels:
```typescript
// app/api/tenants/[tenantId]/route.ts
export async function GET(
  request: Request,
  { params }: { params: { tenantId: string } }
) {
  // Validate tenant
  const tenant = await getTenant(params.tenantId)
  if (!tenant) {
    return NextResponse.json({ error: 'Tenant not found' }, { status: 404 })
  }
  
  // Return tenant-specific data
  return NextResponse.json({ tenant })
}
```

## 📊 Production Monitoring

### Analytics & Monitoring
```typescript
// lib/monitoring.ts
export class ProductionMonitor {
  static trackUsage(action: string, userId?: string) {
    // Track user actions
    fetch('/api/analytics', {
      method: 'POST',
      body: JSON.stringify({ action, userId, timestamp: Date.now() })
    })
  }
  
  static trackPerformance(metric: string, value: number) {
    // Track performance metrics
    console.log(`Performance: ${metric} = ${value}`)
  }
  
  static trackError(error: Error, context?: string) {
    // Track errors for debugging
    fetch('/api/errors', {
      method: 'POST',
      body: JSON.stringify({ 
        error: error.message, 
        stack: error.stack, 
        context,
        timestamp: Date.now()
      })
    })
  }
}
```

## 💰 Cost Estimation

### Vercel (Recommended)
- **Hobby**: $0/bulan (Personal use)
- **Pro**: $20/bulan (Bandwidth lebih tinggi)
- **Enterprise**: Custom pricing

### Netlify
- **Starter**: $0/bulan
- **Pro**: $19/bulan
- **Business**: $99/bulan

### Self-Hosting
- **VPS**: $5-20/bulan (tergantung spesifikasi)
- **Dedicated Server**: $50-200/bulan
- **Domain**: $10-15/tahun

## 🎯 Rekomendasi untuk Manajemen Hotel

### Opsi 1: Vercel (Mudah & Cepat)
```bash
# Deploy dalam 5 menit
npm i -g vercel
vercel --prod
```
**URL**: https://hotel-absa-yourname.vercel.app
**Setup Time**: 5 menit
**Cost**: Free

### Opsi 2: Custom Domain dengan Vercel
```bash
# Setup custom domain
vercel domains add hotel-absa-yourhotel.com
```
**URL**: https://dashboard.hotel-absa-yourhotel.com
**Setup Time**: 10 menit
**Cost**: Free + domain ($10/tahun)

### Opsi 3: Self-Hosting (Full Control)
```bash
# Production server setup
npm run build
pm2 start ecosystem.config.js
```
**URL**: https://dashboard.hotel-absa-yourhotel.com
**Setup Time**: 1-2 jam
**Cost**: $5-20/bulan

## 🚀 Quick Start Script

```bash
#!/bin/bash
# deploy.sh - Quick deployment script

echo "🚀 Hotel ABSA Dashboard Deployment"
echo "================================"

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "📦 Installing Vercel CLI..."
    npm i -g vercel
fi

# Deploy to Vercel
echo "🌐 Deploying to Vercel..."
vercel --prod

echo "✅ Deployment complete!"
echo "📋 Your dashboard is now live at:"
echo "🔗 https://your-app-name.vercel.app"
```

## 📱 Mobile Optimization

Untuk akses mobile yang lebih baik:
```typescript
// next.config.ts
module.exports = {
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['lucide-react']
  },
  images: {
    domains: ['your-domain.com'],
    formats: ['image/webp', 'image/avif'],
  }
}
```

## 🔧 Production Checklist

### Pre-Deployment Checklist:
- [ ] Environment variables configured
- [ ] Build runs without errors
- [ ] All API endpoints tested
- [ ] File upload security implemented
- [ ] SSL certificate configured
- [ ] Domain DNS configured
- [ ] Monitoring setup
- [ ] Backup strategy implemented

### Post-Deployment Checklist:
- [ ] Dashboard accessible via HTTPS
- [ ] All features working correctly
- [ ] File uploads functional
- [ ] AI integration working
- [ ] Mobile responsive
- [ ] Performance acceptable (<3s load time)
- [ ] Error monitoring active

## 🆘 Troubleshooting

### Common Issues:
1. **Build fails**: Check Node.js version (min 18)
2. **API errors**: Verify environment variables
3. **Upload issues**: Check file size limits
4. **Performance**: Enable caching and optimization
5. **SSL issues**: Use Let's Encrypt or provider SSL

### Support Commands:
```bash
# Check logs
vercel logs

# Redeploy
vercel --prod

# Check environment
vercel env ls
```

---

**📞 Need Help?**
- Documentation: https://docs.hotel-absa.com
- Support: support@hotel-absa.com
- Issues: GitHub Issues

**🎯 Recommended for Hotels:**
Start with Vercel (free) → Upgrade to custom domain when ready → Consider self-hosting for full control