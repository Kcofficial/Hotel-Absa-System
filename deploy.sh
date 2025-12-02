#!/bin/bash

# 🚀 Hotel ABSA Dashboard - Quick Deployment Script
# Usage: ./deploy.sh [vercel|netlify|docker|production]

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${GREEN}✅ $1${NC}"
}

print_info() {
    echo -e "${BLUE}ℹ️  $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

print_error() {
    echo -e "${RED}❌ $1${NC}"
}

# Check deployment type
DEPLOY_TYPE=${1:-vercel}

echo -e "${BLUE}🚀 Hotel ABSA Dashboard Deployment${NC}"
echo -e "${BLUE}=====================================${NC}"
echo -e "${BLUE}Deployment Type: ${DEPLOY_TYPE}${NC}"
echo ""

# Function to check prerequisites
check_prerequisites() {
    print_info "Checking prerequisites..."
    
    # Check Node.js
    if ! command -v node &> /dev/null; then
        print_error "Node.js is not installed. Please install Node.js 18+"
        exit 1
    fi
    
    NODE_VERSION=$(node -v | cut -d'v' -f2)
    print_status "Node.js version: $NODE_VERSION"
    
    # Check npm
    if ! command -v npm &> /dev/null; then
        print_error "npm is not installed"
        exit 1
    fi
    
    # Check git
    if ! command -v git &> /dev/null; then
        print_error "git is not installed"
        exit 1
    fi
    
    print_status "Prerequisites check completed"
}

# Function to install dependencies
install_dependencies() {
    print_info "Installing dependencies..."
    npm ci
    print_status "Dependencies installed"
}

# Function to build project
build_project() {
    print_info "Building project for production..."
    npm run build
    print_status "Build completed"
}

# Function to deploy to Vercel
deploy_vercel() {
    print_info "Deploying to Vercel..."
    
    # Check if Vercel CLI is installed
    if ! command -v vercel &> /dev/null; then
        print_info "Installing Vercel CLI..."
        npm i -g vercel
    fi
    
    # Deploy
    vercel --prod
    
    print_status "Deployment to Vercel completed!"
    print_info "Your dashboard is now live at: https://hotel-absa-dashboard.vercel.app"
}

# Function to deploy to Netlify
deploy_netlify() {
    print_info "Deploying to Netlify..."
    
    # Check if Netlify CLI is installed
    if ! command -v netlify &> /dev/null; then
        print_info "Installing Netlify CLI..."
        npm i -g netlify-cli
    fi
    
    # Deploy
    netlify deploy --prod --dir=.next
    
    print_status "Deployment to Netlify completed!"
    print_info "Your dashboard is now live at: https://hotel-absa-dashboard.netlify.app"
}

# Function to deploy with Docker
deploy_docker() {
    print_info "Building Docker image..."
    
    # Build Docker image
    docker build -t hotel-absa-dashboard .
    
    print_status "Docker image built successfully!"
    
    # Run container
    print_info "Starting Docker container..."
    docker run -d -p 3000:3000 --name hotel-absa hotel-absa-dashboard
    
    print_status "Docker container is running on port 3000"
    print_info "Access your dashboard at: http://localhost:3000"
}

# Function to setup production environment
setup_production() {
    print_info "Setting up production environment..."
    
    # Copy environment file
    if [ ! -f ".env.production" ]; then
        print_warning ".env.production not found. Creating from example..."
        cp .env.production.example .env.production
        print_warning "Please update .env.production with your values"
    fi
    
    # Install PM2 for process management
    if ! command -v pm2 &> /dev/null; then
        print_info "Installing PM2..."
        npm i -g pm2
    fi
    
    # Start with PM2
    pm2 start npm --name "hotel-absa" -- start
    
    print_status "Production server started with PM2"
    print_info "Dashboard is running at: http://localhost:3000"
    print_info "Process ID: $(pm2 pid hotel-absa)"
}

# Function to setup SSL with Nginx
setup_nginx() {
    print_info "Setting up Nginx configuration..."
    
    # Create Nginx config
    cat > /etc/nginx/sites-available/hotel-absa << EOF
server {
    listen 80;
    server_name your-domain.com;
    return 301 https://\$server_name\$request_uri;
}

server {
    listen 443 ssl http2;
    server_name your-domain.com;

    ssl_certificate /etc/ssl/certs/your-domain.crt;
    ssl_certificate_key /etc/ssl/private/your-domain.key;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \$scheme;
        proxy_cache_bypass \$http_upgrade;
    }
}
EOF
    
    # Enable site
    ln -s /etc/nginx/sites-available/hotel-absa /etc/nginx/sites-enabled/
    
    # Test Nginx configuration
    nginx -t
    
    # Restart Nginx
    systemctl restart nginx
    
    print_status "Nginx configuration completed"
}

# Function to show post-deployment info
show_post_deployment() {
    echo ""
    echo -e "${GREEN}🎉 Deployment Completed Successfully!${NC}"
    echo -e "${BLUE}=====================================${NC}"
    echo ""
    echo -e "${YELLOW}📋 Post-Deployment Checklist:${NC}"
    echo "□ Test all dashboard features"
    echo "□ Verify file upload functionality"
    echo "□ Check AI integration"
    echo "□ Test mobile responsiveness"
    echo "□ Monitor performance"
    echo "□ Setup monitoring/alerts"
    echo ""
    echo -e "${BLUE}📊 Dashboard Features:${NC}"
    echo "• Real-time sentiment analysis"
    echo "• Excel file upload & processing"
    echo "• SHAP/LIME explainability"
    echo "• Business insights & recommendations"
    echo "• Report generation (PDF/Excel)"
    echo "• Multi-tenant support"
    echo ""
    echo -e "${GREEN}🔗 Access Your Dashboard:${NC}"
    echo "• Local: http://localhost:3000"
    echo "• Production: https://your-domain.com"
    echo ""
    echo -e "${BLUE}📞 Need Help?${NC}"
    echo "• Documentation: /DEPLOYMENT.md"
    echo "• Support: support@hotel-absa.com"
    echo "• Issues: GitHub Issues"
}

# Main deployment logic
main() {
    check_prerequisites
    install_dependencies
    build_project
    
    case $DEPLOY_TYPE in
        "vercel")
            deploy_vercel
            ;;
        "netlify")
            deploy_netlify
            ;;
        "docker")
            deploy_docker
            ;;
        "production")
            setup_production
            echo ""
            print_info "For SSL setup, run: sudo ./deploy.sh nginx"
            ;;
        "nginx")
            setup_nginx
            ;;
        *)
            print_error "Invalid deployment type. Use: vercel, netlify, docker, production, or nginx"
            echo "Usage: ./deploy.sh [vercel|netlify|docker|production|nginx]"
            exit 1
            ;;
    esac
    
    show_post_deployment
}

# Run main function
main