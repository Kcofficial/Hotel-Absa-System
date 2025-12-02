#!/bin/bash

# 🚀 Setup GitHub & Vercel - Hotel-Absa-System
# Script untuk menginstal dashboard dengan nama repository yang benar

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

# Function to print colored output
print_header() {
    echo -e "${BLUE}🚀 $1${NC}"
}

print_success() {
    echo -e "${GREEN}✅ $1${NC}"
}

print_info() {
    echo -e "${CYAN}ℹ️  $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

print_error() {
    echo -e "${RED}❌ $1${NC}"
}

print_step() {
    echo -e "${PURPLE}📋 Step $1${NC}"
}

# Main setup function
main() {
    print_header "Hotel ABSA System - GitHub & Vercel Setup"
    echo "=================================================="
    echo ""
    
    # Step 1: Navigate to project directory
    print_step "1: Navigate to project directory"
    cd /home/z/my-project
    print_success "Current directory: $(pwd)"
    echo ""
    
    # Step 2: Update package.json with correct repository info
    print_step "2: Update package.json with correct repository info"
    cp package-updated.json package.json
    print_success "Package.json updated with Hotel-Absa-System repository info"
    echo ""
    
    # Step 3: Update README
    print_step "3: Update README.md"
    cp README-UPDATED.md README.md
    print_success "README.md updated with correct repository information"
    echo ""
    
    # Step 4: Initialize Git (if not already initialized)
    print_step "4: Initialize Git repository"
    if [ ! -d ".git" ]; then
        git init
        git branch -M main
        print_success "Git repository initialized"
    else
        print_info "Git repository already exists"
    fi
    echo ""
    
    # Step 5: Configure Git user
    print_step "5: Configure Git user"
    git config user.name "Dedi Kundana"
    git config user.email "dedi.kundana@its.ac.id"
    print_success "Git user configured: Dedi Kundana <dedi.kundana@its.ac.id>"
    echo ""
    
    # Step 6: Add all files to Git
    print_step "6: Add all files to Git"
    git add .
    print_success "All files added to Git"
    echo ""
    
    # Step 7: Create initial commit
    print_step "7: Create initial commit"
    git commit -m "Initial commit - Hotel ABSA System

🏨 Sistem analisis sentimen berbasis aspek untuk manajemen hotel
🤖 Menggunakan arsitektur hybrid BERTopic-RoBERTa-Explainable AI
👨‍💻 Developed by: Dedi Kundana, S.Pd., M.T.I.
🎓 Program: Doktor Manajemen Teknologi - ITS
📅 Tahun: 2025

Features:
• Real-time sentiment analysis dashboard
• Excel file upload & AI processing
• SHAP/LIME explainable AI
• Business insights & recommendations
• Multi-format reporting system
• Mobile-optimized responsive design

Technology Stack:
• Next.js 15 + TypeScript
• BERTopic + RoBERTa + XAI
• Tailwind CSS + Lucide Icons
• z-ai-web-dev-sdk integration"
    print_success "Initial commit created"
    echo ""
    
    # Step 8: Check if remote exists
    print_step "8: Setup GitHub remote"
    if git remote get-url origin &>/dev/null; then
        print_info "Remote 'origin' already exists"
        git remote set-url origin https://github.com/Kcofficial/Hotel-Absa-System.git
        print_success "Remote URL updated to: https://github.com/Kcofficial/Hotel-Absa-System.git"
    else
        git remote add origin https://github.com/Kcofficial/Hotel-Absa-System.git
        print_success "Remote 'origin' added: https://github.com/Kcofficial/Hotel-Absa-System.git"
    fi
    echo ""
    
    # Step 9: Push to GitHub
    print_step "9: Push to GitHub"
    print_info "Pushing to GitHub..."
    git push -u origin main
    print_success "Successfully pushed to GitHub!"
    echo ""
    
    # Step 10: Setup Vercel
    print_step "10: Setup Vercel deployment"
    
    # Check if Vercel CLI is installed
    if ! command -v vercel &> /dev/null; then
        print_info "Installing Vercel CLI..."
        npm i -g vercel
        print_success "Vercel CLI installed"
    else
        print_info "Vercel CLI already installed"
    fi
    echo ""
    
    # Step 11: Login to Vercel
    print_step "11: Login to Vercel"
    print_info "Please login to Vercel (browser will open)..."
    vercel login
    print_success "Logged in to Vercel"
    echo ""
    
    # Step 12: Deploy to Vercel
    print_step "12: Deploy to Vercel"
    print_info "Deploying to Vercel..."
    vercel --prod
    print_success "Successfully deployed to Vercel!"
    echo ""
    
    # Step 13: Show final information
    print_header "🎉 Setup Complete!"
    echo "=================================================="
    echo ""
    echo -e "${GREEN}✅ Repository:${NC} https://github.com/Kcofficial/Hotel-Absa-System"
    echo -e "${GREEN}✅ Live URL:${NC} https://hotel-absa-system.vercel.app"
    echo ""
    echo -e "${CYAN}📋 Next Steps:${NC}"
    echo "1. Visit your dashboard: https://hotel-absa-system.vercel.app"
    echo "2. Test all features (upload, analysis, reports)"
    echo "3. Configure custom domain (optional)"
    echo "4. Set up monitoring and analytics"
    echo ""
    echo -e "${YELLOW}⚠️  Important Notes:${NC}"
    echo "• Repository name: Hotel-Absa-System"
    echo "• Owner: Kcofficial"
    echo "• Default Vercel URL: hotel-absa-system.vercel.app"
    echo "• Custom domain: Configure in Vercel dashboard"
    echo ""
    echo -e "${PURPLE}📞 Need Help?${NC}"
    echo "• GitHub: https://github.com/Kcofficial/Hotel-Absa-System/issues"
    echo "• Email: dedi.kundana@its.ac.id"
    echo "• Documentation: https://github.com/Kcofficial/Hotel-Absa-System#readme"
    echo ""
}

# Error handling
trap 'print_error "Setup failed! Please check the error messages above."; exit 1' ERR

# Run main function
main