/**
 * Quick Indexing Test Script for Place of Grace Community Centre
 * Run this to check if your website is properly indexed
 */

// Test URLs to check indexing
const testUrls = [
  'https://www.placeofgracecommunitycentre.org',
  'https://www.placeofgracecommunitycentre.org/about',
  'https://www.placeofgracecommunitycentre.org/programs',
  'https://www.placeofgracecommunitycentre.org/contact'
];

// Search queries to test
const searchQueries = [
  'Place of Grace Community Centre',
  'children home Kenya',
  'orphanage Nairobi',
  'charity Kenya children',
  'donate children Kenya'
];

console.log('🔍 Website Indexing Test for Place of Grace Community Centre');
console.log('==========================================================');

console.log('\n📋 Test URLs to Check:');
testUrls.forEach((url, index) => {
  console.log(`${index + 1}. ${url}`);
});

console.log('\n🔍 Search Queries to Test:');
searchQueries.forEach((query, index) => {
  console.log(`${index + 1}. "${query}"`);
});

console.log('\n📊 How to Test Indexing:');
console.log('1. Go to Google.com');
console.log('2. Search for each query above');
console.log('3. Check if your website appears in results');
console.log('4. Note the position (1st, 2nd, 3rd, etc.)');

console.log('\n🌐 Direct Search URLs:');
searchQueries.forEach(query => {
  const encodedQuery = encodeURIComponent(query);
  console.log(`"${query}": https://www.google.com/search?q=${encodedQuery}`);
});

console.log('\n📱 Mobile Search Test:');
console.log('1. Use your phone to search');
console.log('2. Check if your website appears');
console.log('3. Test local search: "charity near me"');

console.log('\n🔧 Technical Indexing Checks:');
console.log('1. Check Google Search Console for indexing status');
console.log('2. Verify sitemap submission');
console.log('3. Check for crawl errors');
console.log('4. Monitor Core Web Vitals');

console.log('\n⏰ Expected Timeline:');
console.log('- Week 1: Initial indexing begins');
console.log('- Week 2: Basic search visibility');
console.log('- Month 1: Improved rankings');
console.log('- Month 2-3: Top 10 results');

console.log('\n📈 Success Metrics:');
console.log('✅ Website appears in search results');
console.log('✅ Shows up in Google Maps');
console.log('✅ Good Core Web Vitals scores');
console.log('✅ Receives organic traffic');
console.log('✅ Ranks for target keywords');

console.log('\n🚀 Next Steps:');
console.log('1. Complete the immediate actions in IMMEDIATE_INDEXING_ACTIONS.md');
console.log('2. Set up Google Search Console');
console.log('3. Create Google My Business listing');
console.log('4. Add content with target keywords');
console.log('5. Build local partnerships');

console.log('\n📞 Need Help?');
console.log('- Check WEBSITE_INDEXING_GUIDE.md for detailed steps');
console.log('- Monitor your progress weekly');
console.log('- Be patient - SEO takes time!');

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    testUrls,
    searchQueries,
    runTest: () => {
      console.log('Running indexing test...');
      // Add actual test logic here
    }
  };
}
