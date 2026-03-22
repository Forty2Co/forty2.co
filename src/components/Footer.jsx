import version from "../../VERSION?raw";

export default function Footer() {
  return (
    <footer class="footer footer-center bg-base-200 text-base-content p-10">
      <aside>
        <p>© {new Date().getFullYear()} forty2.co</p>
        <p class="text-xs text-base-content/40">v{version.trim()}</p>
      </aside>
    </footer>
  );
}
