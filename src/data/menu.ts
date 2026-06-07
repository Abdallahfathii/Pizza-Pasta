export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  priceM?: number;
  isNew?: boolean;
  isBest?: boolean;
}

export interface MenuCategory {
  id: string;
  title: string;
  titleEn: string;
  items: MenuItem[];
  color: 'green' | 'red' | 'white';
}

export const menuCategories: MenuCategory[] = [
  {
    id: 'pasta',
    title: 'باستا',
    titleEn: 'PASTA',
    color: 'green',
    items: [
      {
        id: 1,
        name: 'بولونيزي باستا',
        description: 'ريد صوص - لحم مفروم - مكرونة إسباجتي',
        price: 160,
      },
      {
        id: 2,
        name: 'الفريدو باستا',
        description: 'صوص الوايت - صدور الدجاج - ماشروم فريش - مكرونة بينا',
        price: 165,
      },
      {
        id: 3,
        name: 'لازنيا',
        description: 'صوص البولونيز - مكرونة لازنيا - لحم مفروم - موتزريلا',
        price: 170,
      },
      {
        id: 4,
        name: 'فوتوتشيتي الفريدو',
        description: 'وايت صوص - صدور دجاج - ماشروم - موتزريلا - مكرونة فوتوتشيني',
        price: 165,
      },
      {
        id: 5,
        name: 'باستا تشيلز',
        description: 'مكرونه - صوص أحمر - خضار - سجق - لحمه مفرومه - زيت زيتون',
        price: 165,
        isNew: true,
      },
      {
        id: 6,
        name: 'باستا تشيكن أرابيتا',
        description: 'مكرونه - خضار - صوص كريمي - صدور - زيت زيتون',
        price: 160,
        isNew: true,
      },
      {
        id: 7,
        name: 'وايت كريسبي',
        description: 'صدر كرسبي - بنا - وايت صوص - فلفل الوان',
        price: 170,
      },
      {
        id: 8,
        name: 'نجرسكو',
        description: 'وايت صوص - صدور دجاج - ماشروم - موتزريلا - مكرونة بينا',
        price: 170,
      },
      {
        id: 9,
        name: 'نودلز EGY',
        description: 'صوص الايجي - صدور دجاج - ماشروم - خضار مشكل - مكرونة فوتوتشيني',
        price: 165,
      },
      {
        id: 10,
        name: 'باستا P&P',
        description: 'اسباجتي - زنجبر - تركي مدخن - صوص شيدر - موتزريلا',
        price: 200,
      },
      {
        id: 11,
        name: 'باستا جمبري',
        description: 'صوص الوايت - جمبري - فلفل الوان - مكرونة بينا',
        price: 210,
      },
      {
        id: 12,
        name: 'باستا فروتي دي مارى',
        description: 'صوص الروزييف - تشكيلة فواكة البحر - مكرونة فوتوتشيني',
        price: 250,
      },
    ],
  },
  {
    id: 'pizza-special',
    title: 'بيتزا مميزة',
    titleEn: 'SPECIAL PIZZA',
    color: 'white',
    items: [
      {
        id: 101,
        name: 'دابل ببروني',
        description: 'صوص شيدر - موتزريلا - ببروني',
        price: 220,
        priceM: 175,
      },
      {
        id: 102,
        name: 'بيتزا جمبري',
        description: 'صوص طماطم - موتزريلا - جمبري مشوى',
        price: 250,
        priceM: 195,
      },
      {
        id: 103,
        name: 'فروتى دى مارى',
        description: 'صوص طماطم - موتزريلا - تشكيلة فواكة البحر',
        price: 260,
        priceM: 205,
      },
      {
        id: 104,
        name: 'P&P',
        description: 'صوص طماطم - جبنه موتزريلا فلفل الوان - تركي - صدور مشويه - زيتون',
        price: 205,
        priceM: 160,
      },
      {
        id: 105,
        name: 'بيتزا كارني',
        description: 'صوص طماطم - جبنه موتزريلا - سجق لحم مفروم - بسطرمه - صوص تكساس',
        price: 220,
        priceM: 185,
      },
      {
        id: 106,
        name: 'تشيز باربيكو بوبرز',
        description: 'صوص كريمي - فلفل اخضر - موتزريلا - بويرز مقلية فراخ - صوص بارييكو',
        price: 205,
        priceM: 160,
        isNew: true,
      },
      {
        id: 107,
        name: 'سي رانش',
        description: 'صوص طماطم - جبنه موتزريلا - جمبري - كابوريا - رانش',
        price: 265,
        priceM: 205,
        isNew: true,
      },
      {
        id: 108,
        name: 'مكس سموكد',
        description: 'صوص طماطم - موتزريلا - تركي مدخن - بيف بيكون - صوص رانش',
        price: 220,
        priceM: 185,
        isNew: true,
      },
    ],
  },
  {
    id: 'pizza-classic',
    title: 'بيتزا كلاسيك',
    titleEn: 'CLASSIC PIZZA',
    color: 'red',
    items: [
      {
        id: 201,
        name: 'مارجريتا',
        description: 'صوص طماطم - موتزريلا',
        price: 140,
        priceM: 110,
      },
      {
        id: 202,
        name: 'تونا تشيبولا',
        description: 'صوص طماطم - موتزريلا - تونة - بصل',
        price: 175,
        priceM: 125,
      },
      {
        id: 203,
        name: 'سموكد بريزولا',
        description: 'صوص طماطم - موتزريلا - جبير - بيف بيكون - جبنة برمجيزان',
        price: 185,
        priceM: 150,
      },
      {
        id: 204,
        name: 'بيتزا الاتورك',
        description: 'صوص طماطم - موتزريلا - صدور دجاج - تركي - هالابينو',
        price: 195,
        priceM: 160,
      },
      {
        id: 205,
        name: 'ببروني',
        description: 'صوص طماطم - موتزريلا - بيروني - هالابينو',
        price: 195,
        priceM: 160,
        isBest: true,
      },
      {
        id: 206,
        name: 'تشكن رانش',
        description: 'صوص طماطم - موتزريلا - صدور دجاج - صوص رانش',
        price: 195,
        priceM: 155,
        isBest: true,
      },
      {
        id: 207,
        name: 'تشكن باربكيو',
        description: 'صوص طماطم - صدور دجاج - موتزريلا - صوص باربيكيو',
        price: 195,
        priceM: 155,
      },
      {
        id: 208,
        name: 'كرانشى رانش',
        description: 'صوص طماطم - موتزريلا - بويرز مقلية - فلفل اخضر - صوص رانش',
        price: 205,
        priceM: 165,
      },
      {
        id: 209,
        name: 'تشكن ناتشوز',
        description: 'صوص طماطم - موتزريلا - صدور دجاج - ماشروم - هالابينو - قطع طماطم فريش - ناتشوز',
        price: 205,
        priceM: 160,
      },
      {
        id: 210,
        name: 'ميت لافر',
        description: 'صوص طماطم - موتزريلا - سلامي - لحم مفروم',
        price: 210,
        priceM: 165,
      },
      {
        id: 211,
        name: 'كواتروفورماجي',
        description: 'صوص طماطم - موتزريلا - مكس جبن برمجيزوم',
        price: 205,
        priceM: 160,
      },
      {
        id: 212,
        name: 'بيج تاستي',
        description: 'صوص طماطم - موتزريلا - استيك - جرجير - بسطرمة',
        price: 210,
        priceM: 170,
        isBest: true,
      },
      {
        id: 213,
        name: 'تشكن الفريدو',
        description: 'صوص الفريدو - موتزريلا - صدور دجاج - ماشروم - فلفل الوان',
        price: 210,
        priceM: 170,
      },
      {
        id: 214,
        name: 'تشيز مادنس',
        description: 'صوص شيدر - موتزريلا - تركي - مكس تشيز برمجيزوم - هالابينو',
        price: 215,
        priceM: 175,
      },
    ],
  },
];
