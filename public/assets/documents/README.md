# Documents Directory

This directory contains downloadable documents for the Place of Grace Community Centre website.

## 📁 File Structure

```
documents/
├── financial-report-2024.pdf     # 2024 Annual Financial Report (REQUIRED)
├── financial-report-2023.pdf     # 2023 Annual Financial Report (OPTIONAL)
└── other-documents/              # Future document storage
```

## 📋 Required Files

### Financial Report 2024
- **Filename**: `financial-report-2024.pdf`
- **Size**: Approximately 2.3 MB (as specified in the code)
- **Content**: Annual financial statements, audit report, and program impact data
- **Last Updated**: December 2024
- **Pages**: 45

## 🚀 How to Add Your PDF

1. **Save your 2024 financial report PDF** in this directory
2. **Rename it** to `financial-report-2024.pdf`
3. **Ensure the file size** is close to 2.3 MB (or update the code accordingly)
4. **Verify the PDF opens correctly** in a web browser

## 📱 User Experience Features

- **Download tracking**: Analytics are logged when users download reports
- **Responsive design**: Optimized for both desktop and mobile devices
- **File information**: Displays file size, pages, and last updated date
- **Accessibility**: Clear download buttons with descriptive text

## 🔧 Technical Notes

- PDFs are served from the `public/assets/documents/` directory
- Download links use the `download` attribute for automatic file saving
- File paths are referenced as `/assets/documents/filename.pdf`
- Mobile-responsive design ensures good UX on all devices

## 📊 Analytics Integration

The download tracking function can be enhanced with:
- Google Analytics event tracking
- Download count monitoring
- User behavior analysis
- Conversion tracking for donor engagement
