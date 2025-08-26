# Google Maps Setup Guide - Place of Grace Children's Home

## Overview

This guide will help you set up Google Maps integration for your website to show the exact location of Place of Grace Children's Home.

## Step 1: Get Google Maps API Key

### 1. Go to Google Cloud Console
- Visit: https://console.cloud.google.com/
- Sign in with your Google account

### 2. Create a New Project (or use existing)
- Click on the project dropdown at the top
- Click "New Project"
- Name it: "Place of Grace Children's Home"
- Click "Create"

### 3. Enable Maps JavaScript API
- In the left sidebar, click "APIs & Services" > "Library"
- Search for "Maps JavaScript API"
- Click on it and click "Enable"

### 4. Enable Geocoding API
- Search for "Geocoding API"
- Click on it and click "Enable"

### 5. Create API Key
- Go to "APIs & Services" > "Credentials"
- Click "Create Credentials" > "API Key"
- Copy the generated API key

### 6. Restrict API Key (Important for Security)
- Click on the API key you just created
- Under "Application restrictions", select "HTTP referrers (web sites)"
- Add your domain: `https://yourdomain.com/*`
- Under "API restrictions", select "Restrict key"
- Select both "Maps JavaScript API" and "Geocoding API"
- Click "Save"

## Step 2: Add API Key to Your Website

### Option A: Environment Variable (Recommended for Production)

1. **Create `.env` file** in your project root:
```bash
# .env
REACT_APP_GOOGLE_MAPS_API_KEY=your_api_key_here
```

2. **Add `.env` to `.gitignore`**:
```bash
# .gitignore
.env
.env.local
.env.development.local
.env.test.local
.env.production.local
```

### Option B: Direct Replacement (Quick Setup)

1. **Open `src/components/GoogleMap.js`**
2. **Find this line**:
```javascript
script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY || 'YOUR_API_KEY_HERE'}&libraries=places`;
```

3. **Replace `'YOUR_API_KEY_HERE'` with your actual API key**:
```javascript
script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyYourActualAPIKeyHere&libraries=places`;
```

## Step 3: Test the Integration

1. **Start your development server**:
```bash
npm start
```

2. **Navigate to the Contact page**
3. **Check if the map loads correctly**
4. **Test the "Directions" button**

## Step 4: Customize the Location

### Update Address (if needed)
In `src/pages/ContactPage.js`, find:
```javascript
<GoogleMap 
  address="DONHOLM PHASE FIVE POLICELINE ROAD, Nairobi, Kenya"
  height="250px"
  zoom={15}
/>
```

### Available Props:
- `address`: The address to display (default: "DONHOLM PHASE FIVE POLICELINE ROAD, Nairobi, Kenya")
- `zoom`: Map zoom level (default: 15)
- `height`: Map height (default: "300px")
- `width`: Map width (default: "100%")

### Example Customizations:
```javascript
// For a more specific location
<GoogleMap 
  address="Donholm Phase 5, Policeline Road, Nairobi, Kenya"
  height="300px"
  zoom={16}
/>

// For a wider view
<GoogleMap 
  address="Donholm, Nairobi, Kenya"
  height="400px"
  zoom={13}
/>
```

## Step 5: Production Deployment

### For Netlify:
1. Go to your Netlify dashboard
2. Navigate to your site settings
3. Go to "Environment variables"
4. Add: `REACT_APP_GOOGLE_MAPS_API_KEY` = your_api_key

### For Vercel:
1. Go to your Vercel dashboard
2. Navigate to your project settings
3. Go to "Environment Variables"
4. Add: `REACT_APP_GOOGLE_MAPS_API_KEY` = your_api_key

### For Traditional Hosting:
1. Create `.env.production` file
2. Add your API key
3. Build the project: `npm run build`
4. Upload the build folder

## Troubleshooting

### Map Not Loading?
1. **Check API Key**: Ensure the API key is correct
2. **Check API Restrictions**: Make sure your domain is allowed
3. **Check Console**: Look for error messages in browser console
4. **Check Billing**: Google Maps API requires billing to be enabled

### Enable Billing (Required)
1. Go to Google Cloud Console
2. Navigate to "Billing"
3. Link a billing account to your project
4. Google provides $200 free credit monthly

### Common Errors:
- **"This API project is not authorized"**: Enable the APIs in step 3
- **"RefererNotAllowedMapError"**: Add your domain to API key restrictions
- **"BillingNotEnabledMapError"**: Enable billing for your project

## Security Best Practices

1. **Always restrict your API key** to your domain
2. **Use environment variables** instead of hardcoding
3. **Monitor usage** in Google Cloud Console
4. **Set up billing alerts** to avoid unexpected charges

## Cost Information

- **Maps JavaScript API**: $7 per 1,000 map loads
- **Geocoding API**: $5 per 1,000 requests
- **Free tier**: $200 monthly credit (covers ~28,000 map loads)

## Support

If you encounter issues:
1. Check the browser console for error messages
2. Verify your API key is correct
3. Ensure billing is enabled
4. Check domain restrictions
5. Contact Google Cloud Support if needed

---

**Note**: The Google Maps integration is now secure and will work with your existing security headers. The map will show the exact location of Place of Grace Children's Home and provide directions functionality.
