export default function NavigationBar() {
  return (
    <nav
      role="navigation"
      class="navbar fixed top-0 left-0 right-0 z-50 bg-base-100/80 backdrop-blur-sm px-4 md:px-8"
    >
      <a href="/" aria-label="forty2.co home" class="focus:outline-none focus:ring-2 focus:ring-primary rounded-lg">
        <img src="/logo.svg" alt="forty2.co" class="h-8" />
      </a>
    </nav>
  );
}
