import HeroDoodles from "./HeroDoodles";
import EmailForm from "./EmailForm";

export default function HeroSection(props) {
  const showEmailForm = () => props.showEmailForm ?? false;

  return (
    <main>
      <section class="min-h-screen flex items-center justify-center px-4 md:px-8 py-16 md:py-24 relative">
        <HeroDoodles />
        <div class="text-center max-w-2xl relative z-10">
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-base-content mb-6 md:mb-8">
            forty2.co is a personal incubator.
          </h1>
          <p class="text-lg md:text-xl lg:text-2xl text-base-content/70 mb-8 md:mb-10">
            I'm cooking something exciting — watch this space for further updates.
          </p>
          <a href="https://github.com/sukantamaikap" target="_blank" rel="noopener noreferrer" class="avatar mx-auto mb-8 inline-block rounded-full focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-base-100">
            <div class="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src="/sukanta_maikap.jpg" alt="Sukanta Maikap" class="rounded-full" />
            </div>
          </a>
          {showEmailForm() && <EmailForm />}
        </div>
      </section>
    </main>
  );
}
