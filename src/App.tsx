import { useState } from "react";
import {
  Leaf,
  Search,
  Sparkles,
  Zap,
  Target,
  GitCompare,
  Repeat,
  Lightbulb,
  Star,
  ArrowRight,
  Crown,
  Menu,
  MessageCircle,
  Salad,
  X,
} from "lucide-react";

const navLinks = [
  { label: "Home", href: "#", active: true },
  { label: "Search", href: "#search" },
  { label: "Compare", href: "#compare" },
  { label: "Alternatives", href: "#alternatives" },
  { label: "Meal Planner", href: "#planner" },
  { label: "Blog", href: "#blog" },
  { label: "Pricing", href: "#premium" },
  { label: "About", href: "#about" },
];

const quickChips = ["Banana", "Eggs", "Oats", "Paneer", "Coffee", "Brown Rice"];

const features = [
  { icon: Zap, title: "Instant answers", desc: "Nutrition, vitamins and portions without the jargon." },
  { icon: Target, title: "Honest pros & cons", desc: "Benefits and downsides side by side, every time." },
  { icon: Sparkles, title: "Better choices", desc: "Healthier swaps you will actually enjoy eating." },
];

const comparisons = [
  { a: "Apple", b: "Banana", desc: "Which fruit really wins for weight loss?" },
  { a: "Coffee", b: "Green Tea", desc: "Energy boost or calm focus?" },
  { a: "Paneer", b: "Tofu", desc: "Best vegetarian protein per bite" },
  { a: "White Rice", b: "Brown Rice", desc: "Does brown rice actually matter?" },
  { a: "Eggs", b: "Oats", desc: "Better breakfast for the gym" },
  { a: "Almonds", b: "Walnuts", desc: "Skin glow vs brain fuel" },
];

const alternatives = [
  {
    title: "Sugar & Sweets",
    desc: "Keep the sweetness, drop the crash.",
    swaps: [["White Sugar", "Dates"], ["Candy Bar", "Dark Chocolate"]],
  },
  {
    title: "Snacks",
    desc: "Crunch without the deep fryer.",
    swaps: [["Potato Chips", "Roasted Makhana"], ["Biscuits", "Almonds"]],
  },
  {
    title: "Drinks",
    desc: "Hydrate without hidden sugar.",
    swaps: [["Cold Drink (Soda)", "Coconut Water"], ["Packaged Juice", "Buttermilk"]],
  },
];

const featuredFoods = [
  { name: "Banana", desc: "Fast energy, potassium rich" },
  { name: "Avocado", desc: "Healthy fats for glow" },
  { name: "Greek Yogurt", desc: "Probiotics and protein" },
  { name: "Spinach", desc: "Iron and folate" },
  { name: "Salmon", desc: "Omega-3 rich" },
  { name: "Dark Chocolate", desc: "Antioxidants in small doses" },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-5 py-3 sm:px-6">
          <a href="#" className="flex min-w-0 items-center gap-2">
            <Leaf className="glow-icon h-5 w-5 shrink-0" strokeWidth={2.25} />
            <span className="font-display text-lg font-semibold tracking-tight">NutriLens</span>
          </a>
          <nav className="hidden items-center gap-1 text-sm lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={
                  "rounded-full px-3 py-1.5 transition-colors hover:text-foreground " +
                  (link.active ? "text-primary" : "text-muted-foreground")
                }
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <a
              href="#premium"
              className="hidden items-center gap-1.5 rounded-full px-3.5 py-1.5 text-sm font-medium text-primary-foreground sm:inline-flex"
              style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-glow-sm)" }}
            >
              <Crown className="h-3 w-3" />
              See Pricing
            </a>
            <button
              aria-label="Open menu"
              onClick={() => setMenuOpen(!menuOpen)}
              className="rounded-full border border-border bg-card p-2 text-muted-foreground transition-colors hover:text-foreground lg:hidden"
            >
              {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <nav className="flex flex-col gap-1 border-t border-border/70 px-5 py-3 text-sm lg:hidden">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={
                  "rounded-full px-3 py-2 transition-colors hover:text-foreground " +
                  (link.active ? "text-primary" : "text-muted-foreground")
                }
              >
                {link.label}
              </a>
            ))}
          </nav>
        )}
      </header>

      <main className="relative overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0" style={{ background: "var(--gradient-surface)" }} />
        <div className="relative mx-auto max-w-6xl px-5 sm:px-6">
          {/* Hero */}
          <section className="animate-float-in pt-12 text-center sm:pt-20">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-pulse-glow rounded-full bg-primary opacity-70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              Data-based · Simple explanations · Fast results
            </div>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-6xl">
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "var(--gradient-primary)" }}
              >
                Know your food
              </span>
              <span className="block text-foreground">in five seconds.</span>
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground sm:text-lg">
              Type any food, fruit, vegetable, snack, drink or meal — get nutrition, benefits,
              downsides and healthier swaps in plain language.
            </p>
            <div className="mt-9">
              <form className="relative mx-auto w-full max-w-2xl" onSubmit={(e) => e.preventDefault()}>
                <div className="group relative flex items-center rounded-2xl border border-border bg-card shadow-[var(--shadow-soft)] transition-all focus-within:border-primary focus-within:shadow-[var(--shadow-glow-sm)]">
                  <Search className="ml-4 h-[18px] w-[18px] shrink-0 text-muted-foreground transition-colors group-focus-within:text-primary" />
                  <input
                    placeholder="Search any food, fruit, drink or dish..."
                    aria-label="Search for a food, fruit, vegetable, drink or dish"
                    autoComplete="off"
                    className="min-w-0 flex-1 bg-transparent px-3 py-4 text-base outline-none placeholder:text-muted-foreground"
                  />
                  <button
                    type="submit"
                    className="m-1.5 inline-flex shrink-0 items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium text-primary-foreground transition-transform active:scale-[0.98] sm:px-5"
                    style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-glow-sm)" }}
                  >
                    <Sparkles className="h-4 w-4" />
                    <span className="hidden sm:inline">Get insight</span>
                  </button>
                </div>
              </form>
            </div>
            <div className="mt-4 flex flex-wrap justify-center gap-2">
              {quickChips.map((chip) => (
                <a
                  key={chip}
                  href="#search"
                  className="rounded-full border border-border bg-card/60 px-3 py-1 text-xs text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
                >
                  {chip}
                </a>
              ))}
            </div>
          </section>

          {/* Feature cards */}
          <section className="mt-20 grid gap-3 sm:grid-cols-3">
            {features.map((f) => (
              <div key={f.title} className="surface-card surface-card-hover p-5">
                <f.icon className="glow-icon h-[22px] w-[22px]" />
                <div className="mt-3 font-medium">{f.title}</div>
                <div className="text-sm text-muted-foreground">{f.desc}</div>
              </div>
            ))}
          </section>

          {/* Compare foods */}
          <section className="mt-20" id="compare">
            <div className="mb-4 flex items-end justify-between gap-3">
              <div className="flex items-center gap-2">
                <GitCompare className="glow-icon h-[18px] w-[18px]" />
                <h2 className="font-display text-lg font-semibold sm:text-xl">Compare foods</h2>
              </div>
              <span className="text-xs text-muted-foreground">Curiosity, settled</span>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {comparisons.map((c) => (
                <a key={c.a + c.b} href="#compare" className="surface-card surface-card-hover flex items-center justify-between gap-3 p-5">
                  <div>
                    <div className="font-display font-semibold">
                      {c.a} <span className="text-muted-foreground">vs</span> {c.b}
                    </div>
                    <div className="mt-1 text-sm text-muted-foreground">{c.desc}</div>
                  </div>
                  <ArrowRight className="h-4 w-4 shrink-0 text-primary" />
                </a>
              ))}
            </div>
          </section>

          {/* Healthy alternatives */}
          <section className="mt-20" id="alternatives">
            <div className="mb-4 flex items-end justify-between gap-3">
              <div className="flex items-center gap-2">
                <Repeat className="glow-icon h-[18px] w-[18px]" />
                <h2 className="font-display text-lg font-semibold sm:text-xl">Healthy alternatives</h2>
              </div>
              <span className="text-xs text-muted-foreground">One swap at a time</span>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {alternatives.map((alt) => (
                <a key={alt.title} href="#alternatives" className="surface-card surface-card-hover p-5">
                  <div className="font-medium">{alt.title}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{alt.desc}</div>
                  <div className="mt-3 space-y-1 text-sm">
                    {alt.swaps.map(([from, to]) => (
                      <div key={from} className="flex items-center gap-2 text-muted-foreground">
                        <span className="line-through">{from}</span>
                        <ArrowRight className="h-3 w-3 text-primary" />
                        <span className="font-medium text-foreground">{to}</span>
                      </div>
                    ))}
                  </div>
                </a>
              ))}
            </div>
          </section>

          {/* Health tip */}
          <section className="mt-20">
            <div
              className="surface-card flex flex-wrap items-center justify-between gap-4 p-6 sm:p-8"
              style={{ borderColor: "color-mix(in oklab, var(--primary) 40%, var(--border))" }}
            >
              <div className="max-w-xl">
                <div className="flex items-center gap-2">
                  <Lightbulb className="glow-icon h-[18px] w-[18px]" />
                  <span className="text-xs uppercase tracking-wider text-muted-foreground">Today's health tip</span>
                </div>
                <p className="mt-3 font-display text-lg font-medium sm:text-xl">
                  Walk 10 minutes after dinner to blunt the blood sugar spike.
                </p>
              </div>
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-2.5 text-sm font-medium transition-colors hover:border-primary/50 hover:text-primary"
              >
                More daily tips <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </section>

          {/* Featured foods */}
          <section className="mt-20">
            <div className="mb-4 flex items-end justify-between gap-3">
              <div className="flex items-center gap-2">
                <Star className="glow-icon h-[18px] w-[18px]" />
                <h2 className="font-display text-lg font-semibold sm:text-xl">Featured foods</h2>
              </div>
              <span className="text-xs text-muted-foreground">Popular this week</span>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
              {featuredFoods.map((food) => (
                <a key={food.name} href="#search" className="surface-card surface-card-hover p-4">
                  <Salad className="glow-icon h-[18px] w-[18px]" />
                  <div className="mt-3 text-sm font-medium">{food.name}</div>
                  <div className="mt-0.5 text-xs text-muted-foreground">{food.desc}</div>
                </a>
              ))}
            </div>
          </section>

          {/* Premium CTA */}
          <section className="mt-20" id="premium">
            <div
              className="rounded-2xl p-8 text-center text-primary-foreground sm:p-12"
              style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-glow)" }}
            >
              <Crown className="mx-auto h-6 w-6" />
              <h2 className="mt-4 font-display text-2xl font-semibold sm:text-3xl">
                Everything above stays free.
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-sm opacity-90 sm:text-base">
                Premium adds advanced comparisons, unlimited saved foods, personalized weekly plans
                and an AI health assistant.
              </p>
              <a
                href="#premium"
                className="mt-6 inline-flex items-center gap-2 rounded-xl bg-card px-5 py-3 text-sm font-semibold text-foreground transition-transform active:scale-[0.98]"
              >
                Explore Premium <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-24 border-t border-border/70 bg-card/40">
        <div className="mx-auto max-w-6xl px-5 py-12 sm:px-6">
          <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
            <span className="rounded-full border border-border bg-card px-2.5 py-1">Data-based</span>
            <span className="rounded-full border border-border bg-card px-2.5 py-1">Simple explanations</span>
            <span className="rounded-full border border-border bg-card px-2.5 py-1">Fast results</span>
          </div>
          <nav className="mt-6 grid grid-cols-2 gap-x-6 gap-y-2 text-sm sm:grid-cols-3 md:grid-cols-5">
            <a href="#about" className="text-muted-foreground transition-colors hover:text-primary">About</a>
            <a href="#blog" className="text-muted-foreground transition-colors hover:text-primary">Health Guides</a>
            <a href="#" className="text-muted-foreground transition-colors hover:text-primary">Daily Tips</a>
            <a href="#" className="text-muted-foreground transition-colors hover:text-primary">Saved Foods</a>
            <a href="#" className="text-muted-foreground transition-colors hover:text-primary">Contact</a>
            <a href="#" className="text-muted-foreground transition-colors hover:text-primary">Privacy Policy</a>
            <a href="#" className="text-muted-foreground transition-colors hover:text-primary">Terms of Use</a>
            <a href="#" className="text-muted-foreground transition-colors hover:text-primary">Disclaimer</a>
            <a href="#" className="text-muted-foreground transition-colors hover:text-primary">Cookie Policy</a>
          </nav>
          <p className="mt-8 max-w-2xl text-xs leading-relaxed text-muted-foreground">
            Nutritional insights are for informational purposes only. Consult a certified dietitian
            for personalized advice.
          </p>
          <p className="mt-3 text-xs text-muted-foreground">© 2026 NutriLens. Food insight made simple.</p>
        </div>
      </footer>

      {/* Chat button */}
      <button
        aria-label="Chat with NutriCoach"
        onClick={() => setChatOpen(!chatOpen)}
        className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full text-primary-foreground transition-transform hover:scale-105"
        style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-glow-sm)" }}
      >
        <MessageCircle className="h-[22px] w-[22px]" />
      </button>

      {chatOpen && (
        <div className="fixed bottom-24 right-5 z-50 w-80 rounded-2xl border border-border bg-card p-4 shadow-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 font-medium">
              <Sparkles className="glow-icon h-4 w-4" />
              NutriCoach
            </div>
            <button onClick={() => setChatOpen(false)} className="text-muted-foreground hover:text-foreground">
              <X className="h-4 w-4" />
            </button>
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            Hi! Ask me about any food — calories, benefits, healthier swaps, or portion sizes.
          </p>
        </div>
      )}
    </div>
  );
}
