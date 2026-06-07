import { motion } from 'framer-motion';
import { Flame, Star } from 'lucide-react';
import type { MenuItem } from '../data/menu';

interface MenuCardProps {
  item: MenuItem;
  index: number;
  color: 'green' | 'red' | 'white';
}

export default function MenuCard({ item, index, color }: MenuCardProps) {
  const isGreen = color === 'green';
  const isRed = color === 'red';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-20px' }}
      transition={{ duration: 0.35, delay: index * 0.04 }}
      whileHover={{ scale: 1.015, y: -3 }}
      className={`relative rounded-lg overflow-hidden shadow-lg ${
        isGreen
          ? 'menu-item-green'
          : isRed
          ? 'menu-item-red'
          : 'menu-item-white'
      }`}
    >
      {/* Badges row */}
      <div className="absolute top-2 left-2 flex gap-1.5 z-10">
        {item.isNew && (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-black bg-yellow-400 text-black shadow-sm">
            <Flame className="w-3 h-3" />
            NEW
          </span>
        )}
        {item.isBest && (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-black bg-amber-500 text-white shadow-sm">
            <Star className="w-3 h-3 fill-white" />
            BEST
          </span>
        )}
      </div>

      <div className="p-4">
        {/* Name and Description */}
        <div className="mb-3">
          <h3
            className={`text-base md:text-lg font-black leading-tight ${
              isGreen || isRed ? 'text-white' : 'text-gray-900'
            }`}
          >
            {item.name}
          </h3>
          <p
            className={`text-[11px] md:text-xs mt-1 leading-relaxed ${
              isGreen || isRed ? 'text-white/75' : 'text-gray-600'
            }`}
          >
            {item.description}
          </p>
        </div>

        {/* Price Row */}
        <div className="flex items-center justify-end gap-3">
          {item.priceM ? (
            <>
              {/* L Price */}
              <div className="flex items-center gap-1.5">
                <span className="price-badge-l text-xs font-black px-2 py-0.5 rounded-md shadow-sm">
                  L
                </span>
                <span
                  className={`text-xl md:text-2xl font-black ${
                    isGreen || isRed ? 'text-white' : 'text-flag-red'
                  }`}
                >
                  {item.price}
                </span>
              </div>
              {/* M Price */}
              <div className="flex items-center gap-1.5">
                <span className="price-badge-m text-xs font-black px-2 py-0.5 rounded-md shadow-sm">
                  M
                </span>
                <span
                  className={`text-xl md:text-2xl font-black ${
                    isGreen || isRed ? 'text-white' : 'text-flag-red'
                  }`}
                >
                  {item.priceM}
                </span>
              </div>
            </>
          ) : (
            /* Single Price for Pasta */
            <div className="flex items-center gap-1.5">
              <span className="price-badge-l text-xs font-black px-2 py-0.5 rounded-md shadow-sm">
                LE
              </span>
              <span
                className={`text-2xl md:text-3xl font-black ${
                  isGreen || isRed ? 'text-white' : 'text-flag-green'
                }`}
              >
                {item.price}
              </span>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
