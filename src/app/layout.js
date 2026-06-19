import '../styles/bootstrap.min.css'; 
import '../styles/style.css';
import GTM from '@/components/GTM'; 

export const metadata = {
  title: 'Mohamed Ismail - Performance Marketer Portfolio',
  description: 'Next.js conversion of SEO Master template',
};

export default function RootLayout({ children }) {
  // Can be configured via NEXT_PUBLIC_GTM_ID in .env
  const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID  

  return (
    <html lang="en">
      <head>
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />

        {/* FontAwesome & Bootstrap Icons CSS */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" />
      </head>
      <body>
        {/* GTM placed right at the top of the body for accurate tracking */}
        <GTM gtmId={GTM_ID} />

        {children}
      </body>
    </html>
  );
}