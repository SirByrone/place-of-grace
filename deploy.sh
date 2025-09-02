#!/bin/bash

# Deploy script for Place of Grace website
echo "🚀 Starting deployment process..."

# Navigate to Website directory
cd Website

# Install dependencies
echo "📦 Installing dependencies..."
npm ci

# Build the project
echo "🔨 Building the project..."
npm run build

# Go back to root
cd ..

# Copy build files to root for GitHub Pages
echo "📁 Copying build files to root..."
cp -r Website/build/* .

# Add all files to git
echo "📝 Adding files to git..."
git add .

# Commit changes
echo "💾 Committing changes..."
git commit -m "Deploy: $(date)"

# Push to main branch
echo "🚀 Pushing to GitHub..."
git push origin main

echo "✅ Deployment complete! Your site should be updated in a few minutes."
echo "🌐 Visit: https://sirbyrone.github.io/place-of-grace"
