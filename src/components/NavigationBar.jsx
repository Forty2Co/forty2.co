export default function NavigationBar() {
  return (
    <nav
      role="navigation"
      class="navbar fixed top-0 left-0 right-0 z-50 bg-base-100/80 backdrop-blur-sm"
    >
      <a href="/" aria-label="forty2.co home">
        <img src="/logo.svg" alt="forty2.co" class="h-8" />
      </a>
    </nav>
  );
}
