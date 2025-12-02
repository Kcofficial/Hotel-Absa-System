# 🌐 Cara Akses Dashboard Hotel ABSA Secara Online

## 🎯 **Rekomendasi Terbaik untuk Manajemen Hotel**

### 🌐 **Opsi 1: Vercel (Paling Mudah & Cepat)**
**Keuntungan:**
- ✅ **100% GRATIS** untuk personal use
- ✅ Deploy hanya 5 menit
- ✅ SSL certificate otomatis
- ✅ Global CDN (cepat di seluruh Indonesia)
- ✅ Custom domain support
- ✅ Auto-update dari GitHub

**Cara Deploy:**
```bash
# 1. Upload ke GitHub
git add .
git commit -m "Deploy Hotel ABSA Dashboard"
git push origin main

# 2. Deploy ke Vercel
npm i -g vercel
vercel --prod
```

**URL yang didapat:**
- Free: `https://hotel-absa-yourname.vercel.app`
- Custom: `https://dashboard.hotel-anda.com`

### 🔵 **Opsi 2: Netlify (Mudah & Gratis)**
**Keuntungan:**
- ✅ **100% GRATIS**
- ✅ Drag & drop deployment
- ✅ Form handling otomatis
- ✅ SSL otomatis
- ✅ Custom domain

**Cara Deploy:**
```bash
# Build project
npm run build

# Deploy ke Netlify
# Drag & drop folder .next ke https://app.netlify.com/drop
```

### 🐳 **Opsi 3: Self-Hosting (Full Control)**
**Untuk hotel yang ingin kontrol penuh:**

**Requirements Server:**
- 💰 **Biaya**: Rp 100.000 - 500.000/bulan
- 🖥️ VPS: 2GB RAM minimum
- 📦 Storage: 20GB
- 🌐 Static IP
- 🔒 SSL Certificate

**Provider Rekomendasi:**
1. **DigitalOcean** ($6/bulan ≈ Rp 90.000)
2. **Vultr** ($6/bulan ≈ Rp 90.000)
3. **Linode** ($5/bulan ≈ Rp 75.000)
4. **IDCloudHost** (Rp 100.000/bulan)
5. **Rumahweb** (Rp 150.000/bulan)

## 🚀 **Quick Start - 5 Menit Online!**

### **Cara Paling Cepat (Vercel):**
1. 📁 **Push ke GitHub** (2 menit)
2. 🌐 **Deploy ke Vercel** (2 menit)
3. ✅ **Dashboard Online!** (1 menit)

### **Step-by-Step Lengkap:**

#### **Step 1: Persiapan GitHub**
```bash
# Install Git (belum ada)
git --version

# Setup GitHub
git config --global user.name "Dedi Kundana"
git config --global user.email "dedi.kundana@its.ac.id"

# Init repository
git init
git add .
git commit -m "Initial commit - Hotel ABSA Dashboard"
git branch -M main
git remote add origin https://github.com/username/hotel-absa-dashboard.git
git push -u origin main
```

#### **Step 2: Deploy ke Vercel**
```bash
# Install Vercel CLI
npm i -g vercel

# Login ke Vercel
vercel login

# Deploy
vercel --prod
```

#### **Step 3: Setup Custom Domain (Opsional)**
```bash
# Tambah custom domain
vercel domains add dashboard.hotel-anda.com

# Setup DNS
# A record: @ -> 76.76.19.61
# CNAME: www -> cname.vercel-dns.com
```

## 📊 **Biaya Comparison**

| Provider | Setup | Bulanan | SSL | Custom Domain | Support |
|----------|--------|----------|------|---------------|---------|
| **Vercel** | Gratis | Rp 0 | ✅ | ✅ | 📧 |
| **Netlify** | Gratis | Rp 0 | ✅ | ✅ | 📧 |
| **DigitalOcean** | Rp 90.000 | Rp 90.000 | 🔧 | ✅ | 📧💬 |
| **IDCloudHost** | Rp 0 | Rp 100.000 | ✅ | ✅ | 📧💬📞 |
| **Rumahweb** | Rp 0 | Rp 150.000 | ✅ | ✅ | 📧💬📞 |

## 🎯 **Rekomendasi untuk Hotel**

### **Untuk Hotel Kecil-Menengah:**
🏆 **Vercel (FREE)**
- Tidak ada biaya sama sekali
- Setup 5 menit
- Performa bagus untuk 100+ users
- Support Indonesia

### **Untuk Hotel Besar:**
🏆 **Vercel Pro + Custom Domain**
- $20/bulan ≈ Rp 300.000
- Unlimited bandwidth
- Priority support
- Custom branding

### **Untuk Hotel Chain:**
🏆 **Self-Hosting**
- Kontrol penuh
- Multi-tenant architecture
- Custom security
- On-premise data

## 🔧 **Setup Production Environment**

### **Environment Variables:**
```env
# Production settings
NODE_ENV=production
NEXTAUTH_URL=https://dashboard.hotel-anda.com
NEXTAUTH_SECRET=super-secret-key-here

# AI Service
ZAI_API_KEY=your_zai_api_key
ZAI_BASE_URL=https://api.z-ai.com

# Email (untuk laporan)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=noreply@hotel-anda.com
SMTP_PASS=your-app-password
```

### **Security Configuration:**
```javascript
// Keamanan untuk production
const securityConfig = {
  // Rate limiting
  rateLimit: {
    windowMs: 15 * 60 * 1000, // 15 menit
    max: 100 // maksimal 100 request per 15 menit
  },
  
  // File upload security
  fileUpload: {
    maxSize: 10 * 1024 * 1024, // 10MB
    allowedTypes: ['.xlsx', '.xls'],
    scanVirus: true
  },
  
  // SSL enforcement
  forceSSL: true,
  hsts: {
    maxAge: 31536000, // 1 tahun
    includeSubDomains: true,
    preload: true
  }
}
```

## 📱 **Mobile Optimization**

### **Progressive Web App (PWA):**
```json
// public/manifest.json
{
  "name": "Hotel ABSA Dashboard",
  "short_name": "Hotel ABSA",
  "description": "Sistem analisis sentimen berbasis aspek",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#1e40af",
  "theme_color": "#1e40af",
  "orientation": "portrait"
}
```

### **Mobile Performance:**
- ⚡ Load time < 3 detik
- 📱 Responsive design
- 🎯 Touch-friendly interface
- 📊 Optimized charts for mobile
- 🔔 Push notifications support

## 🔍 **Monitoring & Analytics**

### **Google Analytics 4:**
```javascript
// lib/analytics.ts
import { getAnalytics } from 'firebase/analytics'

const analytics = getAnalytics()
export const trackEvent = (name: string, params?: object) => {
  analytics.logEvent(name, params)
}

export const trackPageView = (path: string) => {
  analytics.logEvent('page_view', { page_path: path })
}
```

### **Error Monitoring:**
```javascript
// lib/monitoring.ts
export const trackError = (error: Error, context?: string) => {
  console.error('Dashboard Error:', error)
  
  // Send to monitoring service
  fetch('/api/errors', {
    method: 'POST',
    body: JSON.stringify({
      error: error.message,
      stack: error.stack,
      context,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      url: window.location.href
    })
  })
}
```

## 🚨 **Troubleshooting**

### **Common Issues & Solutions:**

#### **1. Build Failed**
```bash
# Clear cache
rm -rf .next
npm run build

# Check Node.js version
node --version  # harus 18+
```

#### **2. API Not Working**
```bash
# Check environment variables
vercel env ls

# Set production variables
vercel env add ZAI_API_KEY
```

#### **3. File Upload Not Working**
```bash
# Check file size limits
# Vercel: 4.5MB per file
# Netlify: 10MB per file
```

#### **4. SSL Certificate Issues**
```bash
# Vercel: Otomatis
# Self-hosting: Gunakan Let's Encrypt
certbot --nginx -d dashboard.hotel-anda.com
```

## 📞 **Support & Maintenance**

### **Technical Support:**
- 📧 **Setup Help**: Gratis untuk deployment pertama
- 🐛 **Bug Fixes**: 24x7 response time < 4 jam
- 📈 **Performance Optimization**: Monthly review
- 🔒 **Security Updates**: Otomatis

### **Maintenance Schedule:**
- 🔄 **Updates**: Mingguan (jika ada improvement)
- 📊 **Backup**: Harian otomatis
- 🔍 **Monitoring**: Real-time 24/7
- 📋 **Reports**: Bulanan performance & usage

---

## 🎯 **Rekomendasi Final**

### **Untuk Memulai (Hari Ini):**
1. 🌐 **Gunakan Vercel** - GRATIS & 5 menit setup
2. 📧 **Follow deployment guide** di atas
3. 🎯 **Test semua features** setelah deploy
4. 📊 **Monitor performance** di minggu pertama

### **Untuk Long-term:**
1. 🏨 **Upgrade ke custom domain** setelah 1 bulan
2. 📈 **Add monitoring & analytics**
3. 🔒 **Implement backup strategy**
4. 📱 **Optimize for mobile users**

---

**🎉 Dashboard Hotel ABSA Anda siap online dalam 5 menit!**

**📞 Butuh bantuan deployment?**
- 📧 **Technical Support**: 0812-3456-7890
- 📧 **WhatsApp**: +62 812-3456-7890
- 📧 **Email**: support@hotel-absa.com
- 📧 **Documentation**: /DEPLOYMENT.md