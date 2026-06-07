import { motion } from 'framer-motion';
import { Phone, MapPin, Clock, Navigation } from 'lucide-react';

export default function ContactSection() {
  return (
    <section className="relative py-12 px-4">
      {/* Section Header */}
      <motion.div
        className="flex justify-center mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="px-10 py-2.5 ribbon-hero bg-gray-800">
          <h2 className="text-xl md:text-2xl font-black text-white tracking-widest text-center">
            CONTACT US
          </h2>
          <p className="text-xs md:text-sm text-white/80 font-bold text-center">
            تواصل معنا
          </p>
        </div>
      </motion.div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Phone & Info Card */}
        <motion.div
          className="bg-white/95 backdrop-blur rounded-xl shadow-xl border border-gray-200 p-6"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-lg font-black text-gray-900 mb-5 flex items-center gap-2">
            <Phone className="w-5 h-5 text-flag-green" />
            معلومات التواصل
          </h3>

          {/* Phone Number - Big and prominent */}
          <motion.a
            href="tel:+201031876636"
            className="block w-full mb-5"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="bg-linear-to-r from-flag-green to-flag-green-dark rounded-xl p-5 text-center shadow-lg">
              <p className="text-white/80 text-sm font-bold mb-1">اطلب الآن</p>
              <p className="text-white text-3xl md:text-4xl font-black tracking-wider">
                31876636  010 📞
                <br />
                31850593  010 📞  
              </p>
              <p className="text-white/70 text-xs mt-1">اضغط للاتصال</p>
            </div>
          </motion.a>

          {/* Info items */}
          <div className="space-y-3">
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <div className="w-10 h-10 rounded-full bg-flag-red/10 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-flag-red" />
              </div>
              <div>
                <p className="text-sm font-bold text-gray-900">العنوان</p>
                <p className="text-xs text-gray-600">السادات سيتى مول الدور الارضى & الداون تاون امام بنك مصر</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <div className="w-10 h-10 rounded-full bg-flag-green/10 flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5 text-flag-green" />
              </div>
              <div>
                <p className="text-sm font-bold text-gray-900">مواعيد العمل</p>
                <p className="text-xs text-gray-600">يومياً من 12 ظهراً حتى 12 منتصف الليل</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center shrink-0">
                <Navigation className="w-5 h-5 text-gray-700" />
              </div>
              <div>
                <p className="text-sm font-bold text-gray-900">التوصيل</p>
                <p className="text-xs text-gray-600">توصيل سريع لجميع المناطق</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Map Card */}
        <motion.div
          className="bg-white/95 backdrop-blur rounded-xl shadow-xl border border-gray-200 p-6"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-lg font-black text-gray-900 mb-5 flex items-center gap-2">
            <MapPin className="w-5 h-5 text-flag-red" />
            موقعنا على الخريطة
          </h3>

          <div className="rounded-xl overflow-hidden shadow-inner border border-gray-200">
            <iframe
              src="https://www.openstreetmap.org/export/embed.html?bbox=31.2350%2C30.0420%2C31.2450%2C30.0480&layer=mapnik&marker=30.0450%2C31.2400"
              width="100%"
              height="320"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="P&P Pizza and Pasta Location"
            />
          </div>

          <a
            href="https://www.openstreetmap.org/way/1075902490#map=19/30.366953/30.527296"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 block text-center text-sm font-bold text-flag-green hover:text-flag-green-dark transition-colors"
          >
            فتح الخريطة للوصول&rarr;
          </a>
        </motion.div>
      </div>
    </section>
  );
}
