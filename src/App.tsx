import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp} from "lucide-react";
import FlagBackground from "./components/FlagBackground";
import PPLogo from "./components/PPLogo";
import MenuSection from "./components/MenuSection";
import ContactSection from "./components/ContactSection";
import { menuCategories } from "./data/menu";

function App() {
  const [activeTab, setActiveTab] = useState<"all" | "pasta" | "pizza">("all");
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const filteredCategories = menuCategories.filter((cat) => {
    if (activeTab === "all") return true;
    if (activeTab === "pasta") return cat.id === "pasta";
    if (activeTab === "pizza")
      return cat.id === "pizza-special" || cat.id === "pizza-classic";
    return true;
  });

  return (
    <div className="min-h-screen font-cairo relative" dir="rtl">
      {/* Three-Column Italian Flag Background */}
      <FlagBackground />

      {/* Hero Section */}
      <header className="relative min-h-screen flex flex-col items-center justify-center px-4 py-12">
        {/* Floating decorations */}

        <motion.div
          className="absolute top-20 right-4 text-flag-red/30 opacity-70"
          animate={{ y: [0, 15, 0], rotate: [0, -15, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
        >
          <img
            src="/pizza2.webp"
            alt="pizza"
            className="w-25 h-25 object-contain"
          />
        </motion.div>

        <motion.div
          className="absolute bottom-50 right-4 text-flag-red/20 opacity-70"
          animate={{ y: [0, 12, 0], rotate: [0, -15, 0] }}
          transition={{ duration: 7, repeat: Infinity }}
        >
          <img
            src="/slice.png"
            alt="slice"
            className="w-20 h-29 object-contain"
          />
        </motion.div>

        <motion.div
          className="absolute bottom-5 right-4 text-flag-red/20 opacity-70"
          animate={{ y: [0, 12, 0], rotate: [0, -15, 0] }}
          transition={{ duration: 7, repeat: Infinity }}
        >
          <img
            src="/Pizza3.Png"
            alt="pizza3"
            className="w-25 h-25 object-contain"
          />
        </motion.div>

        <motion.div
          className="absolute top-25 left-4 text-flag-green/30 opacity-70"
          animate={{ y: [0, -15, 0], rotate: [0, 15, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
        >
          <img
            src="/pasta2.png"
            alt="pasta2"
            className="w-25 h-25 object-contain"
          />
        </motion.div>

        <motion.div
          className="absolute bottom-5 left-4 text-flag-green/20 opacity-80"
          animate={{ y: [0, -12, 0], rotate: [0, -15, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <img
            src="/pasta1.png"
            alt="pasta1"
            className="w-25 h-25 object-contain"
          />
        </motion.div>

        <motion.div
          className="absolute top-60 left-4 text-flag-red/30 opacity-60"
          animate={{ y: [0, 15, 0], rotate: [0, -15, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
        >
          <img
            src="/fork.png"
            alt="fork"
            className="w-25 h-25 object-contain"
          />
        </motion.div>

        {/* P&P Logo */}
        <PPLogo />

        {/* Tagline */}
        {/* <motion.p
          className="mt-5 text-gray-800 text-xs md:text-base font-bold text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          اول مطعم فى مدينة السادات بطعم وريحة ايطاليا
        </motion.p> */}
        <motion.div
  className="mt-2 flex justify-center"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.8, duration: 0.6 }}
>
  <svg viewBox="0 0 300 80" width="300" height="80">
    {/* المسار المنحني - منحنى لفوق */}
    <path
      id="curve"
      d="M 20,60 Q 150,10 280,60"
      fill="none"
    />
    <text
      fontFamily="Cairo, sans-serif"
      fontSize="10px"
      fontWeight="bold"
      fill="#1f2937"
      textAnchor="middle"
    >
      <textPath href="#curve" startOffset="50%">
        اول مطعم فى مدينة السادات بطعم وريحة ايطاليا
      </textPath>
    </text>
  </svg>
</motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-6 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center pt-2">
            <motion.div
              className="w-1.5 h-1.5 bg-gray-500 rounded-full"
              animate={{ y: [0, 10, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </header>

      {/* Menu Section */}
      <main className="relative px-4 md:px-8 pb-8 max-w-4xl mx-auto">
        {/* Tab Navigation */}
        <motion.div
          className="sticky top-3 z-30 flex justify-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex bg-white/90 backdrop-blur-xl rounded-full p-1.5 shadow-lg border border-gray-200">
            {[
              { id: "all" as const, label: "الكل" },
              { id: "pasta" as const, label: "باستا" },
              { id: "pizza" as const, label: "بيتزا" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-6 py-2.5 rounded-full text-sm font-black transition-all duration-300 ${
                  activeTab === tab.id
                    ? "text-white"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTabBg"
                    className="absolute inset-0 bg-linear-to-r from-flag-red via-gray-400 to-flag-green rounded-full"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Menu Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
          >
            {filteredCategories.map((category) => (
              <MenuSection key={category.id} category={category} />
            ))}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <footer className="relative bg-gray-900 text-white py-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Italian flag colors divider */}
          <div className="flex justify-center gap-1 mb-4">
            <div className="w-8 h-1 rounded-full bg-flag-green" />
            <div className="w-8 h-1 rounded-full bg-white" />
            <div className="w-8 h-1 rounded-full bg-flag-red" />
          </div>

          <p className="text-white/60 text-sm font-bold">
            P&P Pizza and Pasta &copy; {new Date().getFullYear()}
          </p>
          <p className="text-white/40 text-xs mt-1">جميع الحقوق محفوظة</p>
        </div>
      </footer>

      {/* Scroll to top button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={scrollToTop}
            className="fixed bottom-5 left-5 z-50 w-11 h-11 rounded-full bg-flag-green text-white shadow-lg flex items-center justify-center hover:bg-flag-green-dark transition-colors"
          >
            <ChevronUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
