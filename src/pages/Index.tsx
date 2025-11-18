import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });
  const { toast } = useToast();

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
    setFormData({ name: '', phone: '', message: '' });
  };

  const services = [
    {
      icon: 'Sparkles',
      title: 'Профессиональная чистка',
      description: 'Комплексная гигиена полости рта с применением современного оборудования',
      price: 'от 3 500 ₽'
    },
    {
      icon: 'Smile',
      title: 'Лечение кариеса',
      description: 'Безболезненное лечение с использованием качественных пломбировочных материалов',
      price: 'от 4 500 ₽'
    },
    {
      icon: 'Star',
      title: 'Отбеливание зубов',
      description: 'Профессиональное отбеливание системой ZOOM 4 для идеальной улыбки',
      price: 'от 18 000 ₽'
    },
    {
      icon: 'Crown',
      title: 'Протезирование',
      description: 'Установка коронок, виниров и имплантов по современным технологиям',
      price: 'от 25 000 ₽'
    },
    {
      icon: 'Scissors',
      title: 'Хирургия',
      description: 'Удаление зубов, имплантация и другие хирургические процедуры',
      price: 'от 3 000 ₽'
    },
    {
      icon: 'Heart',
      title: 'Детская стоматология',
      description: 'Бережное лечение зубов у детей в комфортной атмосфере',
      price: 'от 2 500 ₽'
    }
  ];

  const doctors = [
    {
      name: 'Иванова Елена Сергеевна',
      specialty: 'Главный врач, стоматолог-терапевт',
      experience: '15 лет опыта',
      image: 'https://cdn.poehali.dev/projects/de0276d7-2cdb-42b0-abfe-4c1ce61b37da/files/abb3fe96-326a-4ccc-b132-7cb982470693.jpg'
    },
    {
      name: 'Петров Михаил Александрович',
      specialty: 'Стоматолог-ортопед',
      experience: '12 лет опыта',
      image: 'https://cdn.poehali.dev/projects/de0276d7-2cdb-42b0-abfe-4c1ce61b37da/files/e4d44088-219e-4aa8-902a-4ad3b0201656.jpg'
    },
    {
      name: 'Смирнова Анна Викторовна',
      specialty: 'Стоматолог-хирург, имплантолог',
      experience: '10 лет опыта',
      image: 'https://cdn.poehali.dev/projects/de0276d7-2cdb-42b0-abfe-4c1ce61b37da/files/abb3fe96-326a-4ccc-b132-7cb982470693.jpg'
    }
  ];

  const reviews = [
    {
      name: 'Мария К.',
      date: '15 октября 2024',
      rating: 5,
      text: 'Отличная клиника! Профессиональный подход, современное оборудование. Особенно понравилось отношение врачей - всё объясняют, делают максимально комфортно.'
    },
    {
      name: 'Дмитрий П.',
      date: '8 октября 2024',
      rating: 5,
      text: 'Делал имплантацию зубов. Всё прошло отлично, без боли и осложнений. Рекомендую!'
    },
    {
      name: 'Светлана Н.',
      date: '1 октября 2024',
      rating: 5,
      text: 'Водила ребенка на лечение кариеса. Врачи нашли подход, ребенок не боялся. Спасибо большое!'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50/30">
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <Icon name="Sparkles" className="text-primary" size={28} />
            <span className="text-2xl font-bold text-primary">АСТОМ</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            <button onClick={() => scrollToSection('services')} className="text-sm font-medium hover:text-primary transition-colors">
              Услуги
            </button>
            <button onClick={() => scrollToSection('doctors')} className="text-sm font-medium hover:text-primary transition-colors">
              Врачи
            </button>
            <button onClick={() => scrollToSection('prices')} className="text-sm font-medium hover:text-primary transition-colors">
              Цены
            </button>
            <button onClick={() => scrollToSection('reviews')} className="text-sm font-medium hover:text-primary transition-colors">
              Отзывы
            </button>
            <button onClick={() => scrollToSection('about')} className="text-sm font-medium hover:text-primary transition-colors">
              О клинике
            </button>
            <button onClick={() => scrollToSection('contacts')} className="text-sm font-medium hover:text-primary transition-colors">
              Контакты
            </button>
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden lg:flex flex-col items-end">
              <a href="tel:+74951234567" className="text-sm font-semibold text-primary hover:text-primary/80 transition-colors">
                +7 (495) 123-45-67
              </a>
              <span className="text-xs text-muted-foreground">Ежедневно 9:00 - 21:00</span>
            </div>
            <Button onClick={() => scrollToSection('contacts')} className="shadow-md hover:shadow-lg transition-all">
              Записаться
            </Button>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-blue-100/20" />
        <div className="container relative px-4 py-20 md:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <Badge variant="secondary" className="w-fit">
                Современная стоматология
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                Здоровая улыбка <span className="text-primary">начинается здесь</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl">
                Профессиональное лечение зубов с применением передовых технологий и индивидуальным подходом к каждому пациенту
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" onClick={() => scrollToSection('contacts')} className="shadow-lg hover:shadow-xl transition-all">
                  <Icon name="Calendar" className="mr-2" size={20} />
                  Записаться на приём
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection('services')}>
                  Наши услуги
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div>
                  <div className="text-3xl font-bold text-primary">15+</div>
                  <div className="text-sm text-muted-foreground">лет опыта</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">10 000+</div>
                  <div className="text-sm text-muted-foreground">пациентов</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">50+</div>
                  <div className="text-sm text-muted-foreground">услуг</div>
                </div>
              </div>
            </div>
            <div className="relative animate-fade-in">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-3xl" />
              <img 
                src="https://cdn.poehali.dev/projects/de0276d7-2cdb-42b0-abfe-4c1ce61b37da/files/0cca3a95-94f5-40c1-8858-873b04d158aa.jpg" 
                alt="Клиника АСТОМ"
                className="rounded-3xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-white">
        <div className="container px-4">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">Наши услуги</Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Полный спектр стоматологических услуг</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Используем современное оборудование и качественные материалы для достижения лучших результатов
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-all hover:-translate-y-1 border-2 hover:border-primary/30">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Icon name={service.icon as any} className="text-primary" size={24} />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">{service.price}</span>
                    <Button variant="ghost" size="sm" onClick={() => scrollToSection('contacts')}>
                      Записаться
                      <Icon name="ArrowRight" className="ml-1" size={16} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="doctors" className="py-20 bg-gradient-to-b from-white to-blue-50/30">
        <div className="container px-4">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">Наша команда</Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Опытные специалисты</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Наши врачи регулярно повышают квалификацию и следят за новейшими достижениями в стоматологии
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {doctors.map((doctor, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-all">
                <CardHeader>
                  <div className="relative w-48 h-48 mx-auto mb-4 overflow-hidden rounded-2xl">
                    <img 
                      src={doctor.image} 
                      alt={doctor.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-xl">{doctor.name}</CardTitle>
                  <CardDescription className="text-base">{doctor.specialty}</CardDescription>
                  <Badge variant="outline" className="mt-2 w-fit mx-auto">
                    {doctor.experience}
                  </Badge>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="prices" className="py-20 bg-white">
        <div className="container px-4">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">Прайс-лист</Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Прозрачные цены</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Стоимость лечения рассчитывается индивидуально после консультации врача
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-0">
                {services.map((service, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between p-6 hover:bg-blue-50/50 transition-colors">
                      <div className="flex items-start gap-4 flex-1">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Icon name={service.icon as any} className="text-primary" size={20} />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-1">{service.title}</h3>
                          <p className="text-sm text-muted-foreground">{service.description}</p>
                        </div>
                      </div>
                      <div className="text-2xl font-bold text-primary ml-4">{service.price}</div>
                    </div>
                    {index < services.length - 1 && <Separator />}
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 bg-gradient-to-b from-white to-blue-50/30">
        <div className="container px-4">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">Отзывы</Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Что говорят наши пациенты</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {reviews.map((review, index) => (
              <Card key={index} className="hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-lg">{review.name}</CardTitle>
                    <div className="flex gap-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Icon key={i} name="Star" className="text-yellow-400 fill-yellow-400" size={16} />
                      ))}
                    </div>
                  </div>
                  <CardDescription>{review.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-white">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4">О клинике</Badge>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Стоматологическая клиника АСТОМ</h2>
            </div>
            
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-center text-muted-foreground text-lg leading-relaxed">
                Мы — команда профессионалов, которая более 15 лет заботится о здоровье и красоте улыбок наших пациентов. 
                Клиника АСТОМ оснащена современным оборудованием последнего поколения, что позволяет нам проводить лечение 
                на высочайшем уровне с максимальным комфортом для пациентов.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-2 border-primary/20">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Icon name="Award" className="text-primary" size={24} />
                  </div>
                  <CardTitle>Высокая квалификация</CardTitle>
                  <CardDescription>
                    Все наши врачи имеют высшую квалификационную категорию и регулярно проходят обучение
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-2 border-primary/20">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Icon name="Shield" className="text-primary" size={24} />
                  </div>
                  <CardTitle>Гарантия качества</CardTitle>
                  <CardDescription>
                    Предоставляем гарантию на все виды работ и используем только проверенные материалы
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-2 border-primary/20">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Icon name="Clock" className="text-primary" size={24} />
                  </div>
                  <CardTitle>Удобный график</CardTitle>
                  <CardDescription>
                    Работаем ежедневно с 9:00 до 21:00, включая выходные и праздничные дни
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-2 border-primary/20">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Icon name="Heart" className="text-primary" size={24} />
                  </div>
                  <CardTitle>Комфорт пациентов</CardTitle>
                  <CardDescription>
                    Создаём уютную атмосферу и применяем современные методы обезболивания
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-gradient-to-b from-white to-blue-50/30">
        <div className="container px-4">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">Контакты</Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Свяжитесь с нами</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Запишитесь на приём или получите консультацию прямо сейчас
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Записаться на приём</CardTitle>
                <CardDescription>Заполните форму и мы перезвоним вам в ближайшее время</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Ваше имя</label>
                    <Input 
                      placeholder="Иван Иванов"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Телефон</label>
                    <Input 
                      type="tel"
                      placeholder="+7 (999) 123-45-67"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Комментарий</label>
                    <Textarea 
                      placeholder="Опишите вашу проблему или укажите желаемое время приёма"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      rows={4}
                    />
                  </div>
                  <Button type="submit" className="w-full" size="lg">
                    <Icon name="Send" className="mr-2" size={20} />
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Phone" className="text-primary" size={24} />
                    Телефон
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <a href="tel:+74951234567" className="text-2xl font-bold text-primary hover:text-primary/80 transition-colors">
                    +7 (495) 123-45-67
                  </a>
                  <p className="text-sm text-muted-foreground mt-2">Ежедневно с 9:00 до 21:00</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="MapPin" className="text-primary" size={24} />
                    Адрес
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-semibold">г. Москва, ул. Ленина, д. 10</p>
                  <p className="text-sm text-muted-foreground mt-2">м. Маяковская, 5 минут пешком</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Mail" className="text-primary" size={24} />
                    Email
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <a href="mailto:info@astom-clinic.ru" className="text-lg font-semibold text-primary hover:text-primary/80 transition-colors">
                    info@astom-clinic.ru
                  </a>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Clock" className="text-primary" size={24} />
                    Режим работы
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Понедельник - Пятница</span>
                    <span className="font-semibold">9:00 - 21:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Суббота - Воскресенье</span>
                    <span className="font-semibold">10:00 - 20:00</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-slate-900 text-white py-12">
        <div className="container px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Sparkles" size={24} />
                <span className="text-xl font-bold">АСТОМ</span>
              </div>
              <p className="text-sm text-slate-400">
                Современная стоматологическая клиника с индивидуальным подходом к каждому пациенту
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Услуги</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><button onClick={() => scrollToSection('services')} className="hover:text-white transition-colors">Лечение</button></li>
                <li><button onClick={() => scrollToSection('services')} className="hover:text-white transition-colors">Протезирование</button></li>
                <li><button onClick={() => scrollToSection('services')} className="hover:text-white transition-colors">Имплантация</button></li>
                <li><button onClick={() => scrollToSection('services')} className="hover:text-white transition-colors">Отбеливание</button></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">О клинике</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><button onClick={() => scrollToSection('doctors')} className="hover:text-white transition-colors">Наши врачи</button></li>
                <li><button onClick={() => scrollToSection('about')} className="hover:text-white transition-colors">О нас</button></li>
                <li><button onClick={() => scrollToSection('reviews')} className="hover:text-white transition-colors">Отзывы</button></li>
                <li><button onClick={() => scrollToSection('prices')} className="hover:text-white transition-colors">Цены</button></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Контакты</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li className="flex items-start gap-2">
                  <Icon name="Phone" size={16} className="mt-0.5 flex-shrink-0" />
                  <a href="tel:+74951234567" className="hover:text-white transition-colors">+7 (495) 123-45-67</a>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Mail" size={16} className="mt-0.5 flex-shrink-0" />
                  <a href="mailto:info@astom-clinic.ru" className="hover:text-white transition-colors">info@astom-clinic.ru</a>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="MapPin" size={16} className="mt-0.5 flex-shrink-0" />
                  <span>г. Москва, ул. Ленина, д. 10</span>
                </li>
              </ul>
            </div>
          </div>

          <Separator className="my-8 bg-slate-700" />
          
          <div className="text-center text-sm text-slate-400">
            <p>© 2024 Стоматологическая клиника АСТОМ. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
