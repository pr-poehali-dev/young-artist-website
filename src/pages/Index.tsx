import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [selectedWork, setSelectedWork] = useState<number | null>(null);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [priceRange, setPriceRange] = useState<string>('all');
  const [sortOrder, setSortOrder] = useState<string>('none');
  const telegramUsername = 'DRAGOmik';

  useEffect(() => {
    const hasVisited = localStorage.getItem('hasVisitedArtStudio');
    if (!hasVisited) {
      const timer = setTimeout(() => {
        setShowWelcome(true);
        setIsChatOpen(true);
      }, 2000);
      localStorage.setItem('hasVisitedArtStudio', 'true');
      return () => clearTimeout(timer);
    }
  }, []);

  const portfolioCategories = [
    {
      id: 'graphics',
      title: 'Графика',
      icon: 'Palette',
      works: [
        { id: 1, title: 'Графическая работа 1', description: 'Цифровая иллюстрация', image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=600' },
        { id: 2, title: 'Графическая работа 2', description: 'Минималистичный дизайн', image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=600' },
        { id: 3, title: 'Графическая работа 3', description: 'Геометрические формы', image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600' },
        { id: 4, title: 'Графическая работа 4', description: 'Абстракция', image: 'https://images.unsplash.com/photo-1551732998-9518b4c8d681?w=600' },
      ]
    },
    {
      id: 'painting',
      title: 'Живопись',
      icon: 'Brush',
      works: [
        { id: 5, title: 'Живопись 1', description: 'Масло на холсте', image: 'https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?w=600' },
        { id: 6, title: 'Живопись 2', description: 'Акриловые краски', image: 'https://images.unsplash.com/photo-1533158326339-7f3cf2404354?w=600' },
        { id: 7, title: 'Живопись 3', description: 'Смешанная техника', image: 'https://images.unsplash.com/photo-1561214115-f2f134cc4912?w=600' },
        { id: 8, title: 'Живопись 4', description: 'Портрет', image: 'https://images.unsplash.com/photo-1578926078223-f11ce9c95a58?w=600' },
      ]
    },
    {
      id: 'illustration',
      title: 'Иллюстрации',
      icon: 'PenTool',
      works: [
        { id: 9, title: 'Иллюстрация 1', description: 'Книжная иллюстрация', image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600' },
        { id: 10, title: 'Иллюстрация 2', description: 'Детская книга', image: 'https://images.unsplash.com/photo-1577083552792-a0d461cb1dd6?w=600' },
        { id: 11, title: 'Иллюстрация 3', description: 'Журнальная графика', image: 'https://images.unsplash.com/photo-1634985861798-0b30cd0a27d6?w=600' },
        { id: 12, title: 'Иллюстрация 4', description: 'Постер', image: 'https://images.unsplash.com/photo-1596548438137-d51ea5c83ca5?w=600' },
      ]
    },
    {
      id: 'murals',
      title: 'Роспись стен',
      icon: 'Sparkles',
      works: [
        { id: 13, title: 'Роспись 1', description: 'Кафе в центре города', image: 'https://images.unsplash.com/photo-1561214078-47a3f6ded1a0?w=600' },
        { id: 14, title: 'Роспись 2', description: 'Детская комната', image: 'https://images.unsplash.com/photo-1582571701930-1aed3b61c6e7?w=600' },
        { id: 15, title: 'Роспись 3', description: 'Офисное пространство', image: 'https://images.unsplash.com/photo-1590736969955-71cc94901144?w=600' },
        { id: 16, title: 'Роспись 4', description: 'Уличный мурал', image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=600' },
      ]
    }
  ];

  const shopItems = [
    {
      id: 1,
      title: 'Абстрактный пейзаж',
      description: 'Акрил на холсте, 60x80 см',
      price: 15000,
      image: 'https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?w=600',
      available: true,
      category: 'painting'
    },
    {
      id: 2,
      title: 'Городская геометрия',
      description: 'Масло на холсте, 50x70 см',
      price: 18000,
      image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=600',
      available: true,
      category: 'graphics'
    },
    {
      id: 3,
      title: 'Флора',
      description: 'Смешанная техника, 40x60 см',
      price: 12000,
      image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600',
      available: true,
      category: 'interior'
    },
    {
      id: 4,
      title: 'Ночной город',
      description: 'Акрил на холсте, 70x100 см',
      price: 22000,
      image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=600',
      available: true,
      category: 'graphics'
    },
    {
      id: 5,
      title: 'Минимализм',
      description: 'Масло на холсте, 50x50 см',
      price: 14000,
      image: 'https://images.unsplash.com/photo-1533158326339-7f3cf2404354?w=600',
      available: false,
      category: 'interior'
    },
    {
      id: 6,
      title: 'Портрет в цвете',
      description: 'Акрил на холсте, 60x80 см',
      price: 20000,
      image: 'https://images.unsplash.com/photo-1578926078223-f11ce9c95a58?w=600',
      available: true,
      category: 'painting'
    },
    {
      id: 7,
      title: 'Геометрическая абстракция',
      description: 'Акрил на холсте, 80x100 см',
      price: 25000,
      image: 'https://images.unsplash.com/photo-1551732998-9518b4c8d681?w=600',
      available: true,
      category: 'graphics'
    },
    {
      id: 8,
      title: 'Цветочная композиция',
      description: 'Масло на холсте, 50x70 см',
      price: 16000,
      image: 'https://images.unsplash.com/photo-1561214115-f2f134cc4912?w=600',
      available: true,
      category: 'interior'
    },
    {
      id: 9,
      title: 'Морской закат',
      description: 'Акрил на холсте, 70x90 см',
      price: 19000,
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600',
      available: true,
      category: 'painting'
    }
  ];

  const shopCategories = [
    { id: 'all', title: 'Все картины', icon: 'Grid' },
    { id: 'painting', title: 'Живопись', icon: 'Brush' },
    { id: 'graphics', title: 'Графика', icon: 'Palette' },
    { id: 'interior', title: 'Интерьерные', icon: 'Home' }
  ];

  const priceRanges = [
    { id: 'all', title: 'Любая цена' },
    { id: 'low', title: 'До 15 000 ₽' },
    { id: 'medium', title: '15 000 - 20 000 ₽' },
    { id: 'high', title: 'От 20 000 ₽' }
  ];

  const filteredShopItems = shopItems.filter(item => {
    const categoryMatch = selectedCategory === 'all' || item.category === selectedCategory;
    
    let priceMatch = true;
    if (priceRange === 'low') priceMatch = item.price < 15000;
    if (priceRange === 'medium') priceMatch = item.price >= 15000 && item.price <= 20000;
    if (priceRange === 'high') priceMatch = item.price > 20000;
    
    return categoryMatch && priceMatch;
  }).sort((a, b) => {
    if (sortOrder === 'asc') return a.price - b.price;
    if (sortOrder === 'desc') return b.price - a.price;
    return 0;
  });

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-lg border-b border-border/50 shadow-sm">
        <div className="container mx-auto px-3 sm:px-4 py-3">
          <div className="flex items-center justify-between">
            <h1 className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Арт-студия
            </h1>
            <div className="hidden md:flex gap-6">
              {['about', 'portfolio', 'shop', 'order'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === section ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {section === 'about' ? 'Обо мне' : section === 'portfolio' ? 'Портфолио' : section === 'shop' ? 'Магазин' : 'Заказать'}
                </button>
              ))}
            </div>
            <div className="flex gap-1 md:hidden">
              <Button 
                variant={activeSection === 'about' ? 'default' : 'ghost'} 
                size="sm" 
                onClick={() => scrollToSection('about')}
                className="h-9 px-3"
              >
                <Icon name="User" size={18} />
              </Button>
              <Button 
                variant={activeSection === 'portfolio' ? 'default' : 'ghost'} 
                size="sm" 
                onClick={() => scrollToSection('portfolio')}
                className="h-9 px-3"
              >
                <Icon name="Palette" size={18} />
              </Button>
              <Button 
                variant={activeSection === 'shop' ? 'default' : 'ghost'} 
                size="sm" 
                onClick={() => scrollToSection('shop')}
                className="h-9 px-3"
              >
                <Icon name="ShoppingBag" size={18} />
              </Button>
              <Button 
                variant={activeSection === 'order' ? 'default' : 'ghost'} 
                size="sm" 
                onClick={() => scrollToSection('order')}
                className="h-9 px-3"
              >
                <Icon name="Mail" size={18} />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <section id="about" className="pt-24 sm:pt-32 pb-12 sm:pb-20 px-3 sm:px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="space-y-4 sm:space-y-6 animate-fade-in">
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight">
                Создаю искусство,<br />
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  которое вдохновляет
                </span>
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground">
                Привет! Я молодая художница, которая превращает идеи в яркие визуальные образы. 
                Работаю в различных техниках: от цифровой графики до масштабной росписи стен.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button onClick={() => scrollToSection('order')} size="lg" className="w-full sm:w-auto bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity">
                  <Icon name="MessageCircle" size={20} className="mr-2" />
                  Заказать работу
                </Button>
                <Button onClick={() => scrollToSection('portfolio')} variant="outline" size="lg" className="w-full sm:w-auto">
                  <Icon name="Eye" size={20} className="mr-2" />
                  Смотреть работы
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in mt-6 md:mt-0">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 rounded-2xl sm:rounded-3xl blur-2xl sm:blur-3xl"></div>
              <img
                src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800"
                alt="Художница за работой"
                className="relative rounded-2xl sm:rounded-3xl shadow-2xl w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-12 sm:py-20 px-3 sm:px-4 bg-muted/30">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-3 sm:mb-4">Портфолио</h2>
          <p className="text-center text-sm sm:text-base text-muted-foreground mb-8 sm:mb-12">Мои работы в разных направлениях</p>
          
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mb-8 sm:mb-12">
            {portfolioCategories.map((category, idx) => (
              <Card 
                key={category.id}
                className="p-3 sm:p-6 text-center hover:shadow-xl transition-all cursor-pointer group active:scale-95 sm:hover:scale-105 border-2 hover:border-primary animate-slide-up"
                style={{ animationDelay: `${idx * 0.1}s` }}
                onClick={() => scrollToSection(category.id)}
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-2 sm:mb-4 rounded-full bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 flex items-center justify-center group-hover:from-primary/20 group-hover:via-secondary/20 group-hover:to-accent/20 transition-colors">
                  <Icon name={category.icon} size={24} className="sm:w-8 sm:h-8 text-primary group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-sm sm:text-xl font-semibold">{category.title}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1 sm:mt-2">{category.works.length} работ</p>
              </Card>
            ))}
          </div>

          {portfolioCategories.map((category) => (
            <div key={category.id} id={category.id} className="mb-10 sm:mb-16">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-8 flex items-center gap-2 sm:gap-3">
                <Icon name={category.icon} size={24} className="sm:w-8 sm:h-8 text-primary" />
                {category.title}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
                {category.works.map((work, idx) => (
                  <Card 
                    key={work.id}
                    className="overflow-hidden group cursor-pointer active:scale-95 sm:hover:shadow-2xl transition-all animate-fade-in"
                    style={{ animationDelay: `${idx * 0.1}s` }}
                    onClick={() => setSelectedWork(work.id)}
                  >
                    <div className="relative overflow-hidden h-40 sm:h-52 md:h-64">
                      <img 
                        src={work.image} 
                        alt={work.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent sm:opacity-0 sm:group-hover:opacity-100 transition-opacity flex items-end p-2 sm:p-4">
                        <div className="text-white">
                          <h4 className="text-xs sm:text-sm font-semibold">{work.title}</h4>
                          <p className="text-xs sm:text-sm opacity-90 hidden sm:block">{work.description}</p>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="shop" className="py-12 sm:py-20 px-3 sm:px-4 bg-muted/30">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">Магазин картин</h2>
            <p className="text-sm sm:text-base text-muted-foreground">Готовые работы доступны для покупки</p>
          </div>

          <div className="mb-8 space-y-6">
            <div>
              <h3 className="text-sm font-medium mb-3 text-muted-foreground">Категория</h3>
              <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2">
                {shopCategories.map((cat) => (
                  <Button
                    key={cat.id}
                    variant={selectedCategory === cat.id ? 'default' : 'outline'}
                    onClick={() => setSelectedCategory(cat.id)}
                    className="justify-start"
                  >
                    <Icon name={cat.icon} size={18} className="mr-2" />
                    {cat.title}
                  </Button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium mb-3 text-muted-foreground">Цена</h3>
              <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2">
                {priceRanges.map((range) => (
                  <Button
                    key={range.id}
                    variant={priceRange === range.id ? 'default' : 'outline'}
                    onClick={() => setPriceRange(range.id)}
                  >
                    {range.title}
                  </Button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium mb-3 text-muted-foreground">Сортировка</h3>
              <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2">
                <Button
                  variant={sortOrder === 'none' ? 'default' : 'outline'}
                  onClick={() => setSortOrder('none')}
                >
                  <Icon name="List" size={18} className="mr-2" />
                  По умолчанию
                </Button>
                <Button
                  variant={sortOrder === 'asc' ? 'default' : 'outline'}
                  onClick={() => setSortOrder('asc')}
                >
                  <Icon name="ArrowUp" size={18} className="mr-2" />
                  Сначала дешёвые
                </Button>
                <Button
                  variant={sortOrder === 'desc' ? 'default' : 'outline'}
                  onClick={() => setSortOrder('desc')}
                >
                  <Icon name="ArrowDown" size={18} className="mr-2" />
                  Сначала дорогие
                </Button>
              </div>
            </div>
          </div>

          {filteredShopItems.length === 0 ? (
            <div className="text-center py-12">
              <Icon name="SearchX" size={48} className="mx-auto mb-4 text-muted-foreground" />
              <p className="text-lg text-muted-foreground">Картины не найдены</p>
              <p className="text-sm text-muted-foreground mt-2">Попробуйте изменить фильтры</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {filteredShopItems.map((item, idx) => (
              <Card 
                key={item.id}
                className="overflow-hidden group hover:shadow-2xl transition-all animate-fade-in"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="relative overflow-hidden h-56 sm:h-64 md:h-72">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {!item.available && (
                    <div className="absolute top-3 right-3 bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      Продано
                    </div>
                  )}
                  {item.available && (
                    <div className="absolute top-3 right-3 bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      В наличии
                    </div>
                  )}
                </div>
                
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{item.description}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                      {item.price.toLocaleString('ru-RU')} ₽
                    </div>
                  </div>

                  <Button 
                    className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90"
                    disabled={!item.available}
                    onClick={() => window.open(`https://t.me/${telegramUsername}?text=${encodeURIComponent(`Здравствуйте! Хочу купить картину "${item.title}" за ${item.price.toLocaleString('ru-RU')} ₽`)}`, '_blank')}
                  >
                    {item.available ? (
                      <>
                        <Icon name="ShoppingCart" size={18} className="mr-2" />
                        Купить в Telegram
                      </>
                    ) : (
                      <>
                        <Icon name="X" size={18} className="mr-2" />
                        Недоступно
                      </>
                    )}
                  </Button>
                </div>
              </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      <section id="order" className="py-12 sm:py-20 px-3 sm:px-4">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">Заказать работу</h2>
            <p className="text-muted-foreground text-sm sm:text-base md:text-lg">
              Расскажите о своей идее, и я воплощу её в жизнь
            </p>
          </div>

          <Card className="p-4 sm:p-8 shadow-2xl">
            <form className="space-y-4 sm:space-y-6" onSubmit={(e) => {
              e.preventDefault();
              alert('Спасибо за заявку! Я свяжусь с вами в ближайшее время.');
            }}>
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-1.5 sm:space-y-2">
                  <label className="text-xs sm:text-sm font-medium">Ваше имя</label>
                  <Input placeholder="Анна" required className="text-sm sm:text-base" />
                </div>
                <div className="space-y-1.5 sm:space-y-2">
                  <label className="text-xs sm:text-sm font-medium">Телефон</label>
                  <Input type="tel" placeholder="+7 (999) 123-45-67" required className="text-sm sm:text-base" />
                </div>
              </div>

              <div className="space-y-1.5 sm:space-y-2">
                <label className="text-xs sm:text-sm font-medium">Email</label>
                <Input type="email" placeholder="anna@example.com" required className="text-sm sm:text-base" />
              </div>

              <div className="space-y-1.5 sm:space-y-2">
                <label className="text-xs sm:text-sm font-medium">Тип работы</label>
                <select className="w-full p-2 border border-input rounded-md bg-background text-sm sm:text-base">
                  <option>Графика</option>
                  <option>Живопись</option>
                  <option>Иллюстрация</option>
                  <option>Роспись стен</option>
                </select>
              </div>

              <div className="space-y-1.5 sm:space-y-2">
                <label className="text-xs sm:text-sm font-medium">Описание проекта</label>
                <Textarea 
                  placeholder="Расскажите подробнее о том, что вы хотите заказать..."
                  rows={4}
                  required
                  className="text-sm sm:text-base min-h-[100px] sm:min-h-[120px]"
                />
              </div>

              <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-primary via-secondary to-accent hover:opacity-90 transition-opacity text-sm sm:text-base h-11 sm:h-12">
                <Icon name="Send" size={18} className="mr-2 sm:w-5 sm:h-5" />
                Отправить заявку
              </Button>
            </form>
          </Card>
        </div>
      </section>

      <footer className="py-8 sm:py-12 px-3 sm:px-4 bg-muted/50 border-t">
        <div className="container mx-auto text-center">
          <div className="flex justify-center gap-4 sm:gap-6 mb-4 sm:mb-6">
            <Button variant="ghost" size="icon" className="hover:text-primary h-10 w-10 sm:h-11 sm:w-11">
              <Icon name="Instagram" size={20} className="sm:w-6 sm:h-6" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-primary h-10 w-10 sm:h-11 sm:w-11">
              <Icon name="Facebook" size={20} className="sm:w-6 sm:h-6" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-primary h-10 w-10 sm:h-11 sm:w-11">
              <Icon name="Mail" size={20} className="sm:w-6 sm:h-6" />
            </Button>
          </div>
          <p className="text-xs sm:text-sm text-muted-foreground px-4">
            © 2024 Арт-студия. Все работы защищены авторским правом.
          </p>
        </div>
      </footer>

      {/* Floating Telegram Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        {isChatOpen && (
          <Card className="mb-4 p-4 w-72 sm:w-80 shadow-2xl animate-fade-in">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <Icon name="MessageCircle" size={20} className="text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm">@{telegramUsername}</h4>
                  <p className="text-xs text-muted-foreground">Художница</p>
                </div>
              </div>
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-8 w-8"
                onClick={() => {
                  setIsChatOpen(false);
                  setShowWelcome(false);
                }}
              >
                <Icon name="X" size={16} />
              </Button>
            </div>
            
            {showWelcome ? (
              <div className="space-y-3">
                <div className="bg-muted/50 rounded-lg p-3">
                  <p className="text-sm mb-2">👋 <strong>Добро пожаловать!</strong></p>
                  <p className="text-sm text-muted-foreground">
                    Спасибо, что заглянули в мою арт-студию! Я создаю уникальные работы: от графики до росписи стен. 
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Есть вопросы? Пишите в Telegram — обсудим ваш проект! ✨
                  </p>
                </div>
                <Button 
                  className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90"
                  onClick={() => window.open(`https://t.me/${telegramUsername}`, '_blank')}
                >
                  <Icon name="Send" size={16} className="mr-2" />
                  Написать в Telegram
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="w-full"
                  onClick={() => setShowWelcome(false)}
                >
                  Спасибо, посмотрю сайт
                </Button>
              </div>
            ) : (
              <div className="space-y-3">
                <p className="text-sm text-muted-foreground">
                  Привет! 👋 Напишите мне в Telegram, чтобы обсудить ваш проект
                </p>
                <Button 
                  className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90"
                  onClick={() => window.open(`https://t.me/${telegramUsername}`, '_blank')}
                >
                  <Icon name="Send" size={16} className="mr-2" />
                  Открыть в Telegram
                </Button>
              </div>
            )}
          </Card>
        )}
        
        <Button
          size="icon"
          className="h-14 w-14 rounded-full shadow-2xl bg-gradient-to-br from-primary via-secondary to-accent hover:scale-110 transition-transform"
          onClick={() => setIsChatOpen(!isChatOpen)}
        >
          {isChatOpen ? (
            <Icon name="X" size={24} className="text-white" />
          ) : (
            <Icon name="MessageCircle" size={24} className="text-white" />
          )}
        </Button>
      </div>
    </div>
  );
};

export default Index;