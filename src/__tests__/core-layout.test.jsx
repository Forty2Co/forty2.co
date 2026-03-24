import { render } from "@solidjs/testing-library";
import { describe, it, expect } from "vitest";
import App from "../App";
import NavigationBar from "../components/NavigationBar";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";

describe("Core layout renders", () => {
  it("App renders without crashing", () => {
    const { container } = render(() => <App />);
    expect(container.innerHTML).not.toBe("");
  });

  it("NavigationBar renders nav with role='navigation'", () => {
    const { container } = render(() => <NavigationBar />);
    const nav = container.querySelector("nav");
    expect(nav).not.toBeNull();
    expect(nav.getAttribute("role")).toBe("navigation");
  });

  it("NavigationBar displays forty2.co brand", () => {
    const { container } = render(() => <NavigationBar />);
    const nav = container.querySelector("nav");
    expect(nav.textContent + nav.innerHTML).toContain("forty2.co");
  });

  it("NavigationBar is fixed positioned", () => {
    const { container } = render(() => <NavigationBar />);
    const nav = container.querySelector("nav");
    expect(nav.className).toContain("fixed");
  });

  it("HeroSection renders main and section elements", () => {
    const { container } = render(() => <HeroSection />);
    expect(container.querySelector("main")).not.toBeNull();
    expect(container.querySelector("section")).not.toBeNull();
  });

  it("HeroSection displays heading text", () => {
    const { container } = render(() => <HeroSection />);
    const h1 = container.querySelector("h1");
    expect(h1).not.toBeNull();
    expect(h1.textContent).toContain("forty2.co is a personal incubator.");
  });

  it("HeroSection displays subheading text", () => {
    const { container } = render(() => <HeroSection />);
    const p = container.querySelector("p");
    expect(p).not.toBeNull();
    expect(p.textContent).toContain("watch this space for further updates");
  });

  it("HeroSection has min-h-screen class", () => {
    const { container } = render(() => <HeroSection />);
    const section = container.querySelector("section");
    expect(section.className).toContain("min-h-screen");
  });

  it("Footer renders footer element", () => {
    const { container } = render(() => <Footer />);
    expect(container.querySelector("footer")).not.toBeNull();
  });

  it("Footer displays copyright with current year", () => {
    const { container } = render(() => <Footer />);
    const year = new Date().getFullYear().toString();
    const footer = container.querySelector("footer");
    expect(footer.textContent).toContain(`© ${year} forty2.co`);
  });

  it("Page uses semantic HTML structure (nav, main, footer)", () => {
    const { container } = render(() => <App />);
    expect(container.querySelector("nav")).not.toBeNull();
    expect(container.querySelector("main")).not.toBeNull();
    expect(container.querySelector("footer")).not.toBeNull();
  });
});
