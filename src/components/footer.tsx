import { Socials } from "./socials";

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row max-w-5xl">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Khandakar Ohida. All rights reserved.
        </p>
        <div className="flex items-center gap-2">
          <Socials />
        </div>
      </div>
    </footer>
  );
}
