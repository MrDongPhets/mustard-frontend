/* MUSTARD DIGITALS - Cookie Notice page  |  v1.0  |  09 Sep 2026
   Prepared By: Sergette Angela Napoles (Wibiz) */
import LegalPage from '../../pages/terms_policies/LegalPage.jsx';   // default → no braces
import { COOKIES } from '../../data/legal-data.js';                 // named → braces

export default function Cookies() {
  return <LegalPage doc={COOKIES} />;
}