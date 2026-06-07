import { motion } from 'framer-motion';
import MenuCard from './MenuCard';
import type { MenuCategory } from '../data/menu';

interface MenuSectionProps {
  category: MenuCategory;
}

export default function MenuSection({ category }: MenuSectionProps) {
  const isGreen = category.color === 'green';
  const isRed = category.color === 'red';

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5 }}
      className="mb-10"
    >
      {/* Section Header Ribbon */}
      <div className="flex justify-center mb-6">
        <motion.div
          className={`relative px-10 py-2.5 ribbon-hero ${
            isGreen
              ? 'bg-flag-green'
              : isRed
              ? 'bg-flag-red'
              : 'bg-gray-800'
          }`}
          whileHover={{ scale: 1.03 }}
          transition={{ type: 'spring', stiffness: 400 }}
        >
          <h2 className="text-xl md:text-2xl font-black text-white tracking-widest text-center">
            {category.titleEn}
          </h2>
          <p className="text-xs md:text-sm text-white/80 font-bold text-center">
            {category.title}
          </p>
        </motion.div>
      </div>

      {/* Size Legend for Pizza sections */}
      {(category.id === 'pizza-special' || category.id === 'pizza-classic') && (
        <div className="flex justify-center gap-6 mb-4">
          <div className="flex items-center gap-2">
            <span className="price-badge-l text-xs font-black px-2 py-0.5 rounded">L</span>
            <span className="text-xs font-bold text-gray-700">كبير</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="price-badge-m text-xs font-black px-2 py-0.5 rounded">M</span>
            <span className="text-xs font-bold text-gray-700">وسط</span>
          </div>
        </div>
      )}

      {/* Menu Items */}
      <div className="grid gap-3 max-w-3xl mx-auto">
        {category.items.map((item, index) => (
          <MenuCard
            key={item.id}
            item={item}
            index={index}
            color={category.color}
          />
        ))}
      </div>
    </motion.section>
  );
}
