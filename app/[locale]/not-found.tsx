import { SiteLink as Link } from "@/components/ui/SiteLink";
export default function NotFound() {
  return (
    <main className="shell error-page">
      <p>LaSpeak · 404</p>
      <h1>Let’s find the thread.</h1>
      <p>This page does not exist. / Cette page n’existe pas.</p>
      <div className="actions">
        <Link href="/en/" className="button">
          English homepage
        </Link>
        <Link href="/fr/" className="text-link">
          Accueil en français →
        </Link>
      </div>
    </main>
  );
}
