import { Server, Mail, Phone, MapPin, CheckCircle, Monitor, Shield, Wrench } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Server className="w-8 h-8 text-blue-600" />
            <span className="text-xl font-semibold text-gray-800">Малов Андрей</span>
          </div>
          <a
            href="#contact"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Связаться
          </a>
        </div>
      </header>

      <main>
        <section className="max-w-6xl mx-auto px-6 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-gray-900 mb-4">
                Системное администрирование для вашего бизнеса
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Профессиональная настройка, поддержка и обслуживание IT-инфраструктуры
              </p>
              <div className="flex items-center gap-2 text-gray-700 mb-3">
                <MapPin className="w-5 h-5 text-blue-600" />
                <span>Краснодар</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span>Опыт работы: 2 года</span>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8" id="contact">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Контактная информация</h2>
              <div className="space-y-4">
                <a
                  href="tel:+79167096735"
                  className="flex items-center gap-4 p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors group"
                >
                  <div className="bg-blue-600 p-3 rounded-lg group-hover:bg-blue-700 transition-colors">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Телефон</div>
                    <div className="font-semibold text-gray-900">+7 (916) 709-67-35</div>
                  </div>
                </a>

                <a
                  href="mailto:harusuzu231@gmail.com"
                  className="flex items-center gap-4 p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors group"
                >
                  <div className="bg-blue-600 p-3 rounded-lg group-hover:bg-blue-700 transition-colors">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Email</div>
                    <div className="font-semibold text-gray-900">harusuzu231@gmail.com</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Услуги</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-slate-50 p-8 rounded-xl hover:shadow-lg transition-shadow">
                <div className="bg-blue-600 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                  <Monitor className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Настройка серверов
                </h3>
                <p className="text-gray-600">
                  Установка и конфигурация серверного оборудования, настройка операционных систем
                </p>
              </div>

              <div className="bg-slate-50 p-8 rounded-xl hover:shadow-lg transition-shadow">
                <div className="bg-blue-600 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Информационная безопасность
                </h3>
                <p className="text-gray-600">
                  Настройка защиты сети, резервное копирование, антивирусная защита
                </p>
              </div>

              <div className="bg-slate-50 p-8 rounded-xl hover:shadow-lg transition-shadow">
                <div className="bg-blue-600 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                  <Wrench className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Техническая поддержка
                </h3>
                <p className="text-gray-600">
                  Обслуживание IT-инфраструктуры, устранение неполадок, консультации
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-6 py-20">
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Готовы начать сотрудничество?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Свяжитесь со мной для обсуждения вашего проекта
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="tel:+79167096735"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Позвонить
              </a>
              <a
                href="mailto:harusuzu231@gmail.com"
                className="bg-blue-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-900 transition-colors"
              >
                Написать email
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p>© 2025 Малов Андрей Денисович. Системное администрирование в Краснодаре</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
