import HeroDoodles from "./HeroDoodles";

export default function HeroSection(props) {
  const showEmailForm = () => props.showEmailForm ?? false;

  return (
    <main>
      <section class="min-h-screen flex items-center justify-center px-4 relative">
        <HeroDoodles />
        <div class="text-center max-w-2xl relative z-10">
          <h1 class="text-4xl md:text-5xl font-bold text-base-content mb-6">
            forty2.co is a personal incubator.
          </h1>
          <p class="text-lg md:text-xl text-base-content/70 mb-8">
            I'm cooking something exciting — watch this space for further updates.
          </p>
          <a href="https://github.com/sukantamaikap" target="_blank" rel="noopener noreferrer" class="avatar mx-auto mb-8 inline-block">
            <div class="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src="/sukanta_maikap.jpg" alt="Sukanta Maikap" />
            </div>
          </a>
          {showEmailForm() && <div>{/* EmailForm placeholder */}</div>}
        </div>
      </section>
    </main>
  );
}
