import React, { useState } from 'react';
import { Phone, MapPin, Car, ShieldCheck, Clock, Users, ChevronRight, MessageCircle, X } from 'lucide-react';

const cars = [
  { id: 1, name: 'Toyota Innova Cross', seats: 8, price: '1.100.000', image: '/cars/toyota-innova-cross.png', description: 'Mẫu MPV 8 chỗ thiết kế hoàn toàn mới, không gian rộng rãi bậc nhất phân khúc. Trang bị tiện nghi hiện đại, cách âm tốt, cực kỳ phù hợp cho các chuyến du lịch gia đình đông người hoặc nhóm bạn.' },
  { id: 2, name: 'Kia Carnival', seats: 8, price: '1.600.000', image: '/cars/kia-carnival.png', description: 'Dòng xe MPV cao cấp cỡ lớn 8 chỗ với thiết kế sang trọng như một chiếc SUV. Không gian nội thất cực kỳ thoải mái với cửa lùa điện thông minh, mang đến trải nghiệm êm ái thượng lưu cho mọi hành trình.' },
  { id: 3, name: 'Hyundai Custin', seats: 7, price: '1.100.000', image: '/cars/huyndai-custin.png', description: 'Mẫu xe 7 chỗ với cửa lùa tiện dụng, thiết kế hiện đại và trẻ trung. Nội thất rộng rãi, ghế ngồi bọc da cao cấp cùng nhiều tính năng an toàn vượt trội, là lựa chọn hoàn hảo cho gia đình.' },
  { id: 4, name: 'Toyota Rush', seats: 7, price: '900.000', image: '/cars/toyota-rush.png', description: 'Chiếc SUV 7 chỗ gầm cao mạnh mẽ, linh hoạt trên nhiều địa hình. Thiết kế thể thao, không gian đủ rộng cho 7 người và tiết kiệm nhiên liệu ưu việt, phù hợp cho cả đi phố lẫn dã ngoại.' },
  { id: 5, name: 'Toyota Veloz', seats: 7, price: '900.000', image: '/cars/toyota-veloz.png', description: 'Mẫu MPV 7 chỗ lai SUV với thiết kế góc cạnh, đậm chất thể thao. Nội thất hiện đại, không gian linh hoạt, tích hợp nhiều công nghệ an toàn tiên tiến, mang lại sự yên tâm tuyệt đối.' },
  { id: 6, name: 'Mitsubishi Xpander Cross', seats: 7, price: '900.000', image: '/cars/mitsubishi-xpander-cross.png', description: 'Dòng xe 7 chỗ gầm cao mang phong cách thể thao nam tính. Hệ thống treo êm ái, vận hành ổn định và tiết kiệm nhiên liệu. Phù hợp cho những gia đình thích sự mạnh mẽ, cá tính.' },
  { id: 7, name: 'Honda Civic', seats: 5, price: '1.100.000', image: '/cars/honda-civic.png', description: 'Mẫu sedan hạng C 5 chỗ đậm chất thể thao, cảm giác lái phấn khích và đầm chắc. Thiết kế ngoại thất cuốn hút, nội thất tiện nghi, lý tưởng cho những chuyến đi dạo phố hay công tác.' },
  { id: 8, name: 'Mazda2 Sport', seats: 5, price: '800.000', image: '/cars/mazda2-sport.png', description: 'Mẫu xe hatchback 5 chỗ nhỏ gọn, thiết kế KODO thanh lịch và thời trang. Linh hoạt khi di chuyển trong phố đông, tiết kiệm nhiên liệu xuất sắc, là lựa chọn số 1 cho các cặp đôi hoặc gia đình nhỏ.' },
];

function App() {
  const [selectedCar, setSelectedCar] = useState(null);

  return (
    <div className="font-sans text-slate-800 bg-slate-50 min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <img src="/logo-hoangtan.png" alt="Hoàng Tấn" className="h-12 w-auto mr-2 object-contain" />
              <span className="font-bold text-2xl text-primary tracking-tight hidden sm:block">HOÀNG TẤN</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-slate-600 hover:text-primary font-medium transition">Dịch vụ</a>
              <a href="#fleet" className="text-slate-600 hover:text-primary font-medium transition">Bảng giá</a>
              <a href="#contact" className="text-slate-600 hover:text-primary font-medium transition">Liên hệ</a>
              <a href="tel:0989557755" className="bg-secondary hover:bg-orange-600 text-white px-6 py-2 rounded-full font-semibold flex items-center transition shadow-lg shadow-orange-200">
                <Phone className="h-4 w-4 mr-2" />
                0989 55 77 55
              </a>
            </div>
            <div className="md:hidden flex items-center">
              <a href="tel:0989557755" className="bg-secondary hover:bg-orange-600 text-white px-4 py-2.5 rounded-full shadow-lg flex items-center font-bold">
                <Phone className="h-4 w-4 mr-2" />
                <span className="text-sm">0989 55 77 55</span>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-primary overflow-hidden">
        {/* Background Decorative elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-500/20 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-accent/20 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
            
            {/* Text Content */}
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight tracking-wide uppercase">
                Dịch Vụ Cho Thuê Xe Tự Lái
                <span 
                  className="text-accent block mt-3 sm:mt-6 text-7xl md:text-8xl lg:text-[100px] tracking-normal normal-case drop-shadow-md" 
                  style={{ fontFamily: "'Dancing Script', cursive", fontWeight: 700 }}
                >
                  Hoàng Tấn
                </span>
              </h1>
              <p className="text-lg md:text-xl text-blue-100 font-light leading-relaxed mb-10 max-w-2xl mx-auto lg:mx-0">
                Chuyên cung cấp các dòng xe đời mới 4 - 8 chỗ. Dịch vụ cho thuê tự lái chuyên nghiệp. Thủ tục nhanh gọn, giao xe tận nơi.
              </p>
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                <a href="#fleet" className="bg-accent hover:bg-yellow-500 text-primary font-bold text-lg px-8 py-4 rounded-full transition shadow-lg shadow-accent/30 flex items-center justify-center">
                  Xem Bảng Giá <ChevronRight className="ml-2 h-5 w-5" />
                </a>
                <a href="tel:0989557755" className="bg-white/10 hover:bg-white/20 text-white border border-white/30 font-bold text-lg px-8 py-4 rounded-full transition backdrop-blur-sm flex items-center justify-center">
                  Gọi Tư Vấn Ngay
                </a>
              </div>
            </div>

            {/* Video Content */}
            <div className="w-full lg:w-1/2 mt-8 lg:mt-0 relative">
              {/* Decorative circle behind video */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-accent/20 rounded-full blur-3xl -z-10 pointer-events-none"></div>
              
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-black/50 border-4 border-white/10 aspect-video bg-slate-800 group">
                <video 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                >
                  <source src="/intro-hoangtan.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 ring-1 ring-inset ring-white/20 rounded-3xl pointer-events-none"></div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Ưu Điểm Dịch Vụ Tự Lái</h2>
            <div className="h-1 w-20 bg-secondary mx-auto rounded-full"></div>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto text-lg">
              Thỏa sức khám phá với không gian riêng tư. Chúng tôi cam kết mang đến trải nghiệm tuyệt vời nhất cho chuyến đi của bạn.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 md:gap-8 max-w-6xl mx-auto">
            {/* Feature 1 */}
            <div className="bg-slate-50 rounded-2xl p-5 md:p-8 border border-slate-100 hover:shadow-2xl transition duration-300 group flex items-start md:flex-col md:items-center text-left md:text-center">
              <div className="bg-primary/10 shrink-0 w-14 h-14 md:w-20 md:h-20 rounded-2xl flex items-center justify-center mr-4 md:mr-0 md:mb-6 group-hover:bg-primary group-hover:text-white transition">
                <Car className="h-7 w-7 md:h-10 md:w-10 text-primary group-hover:text-white" />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-bold text-slate-800 mb-1 md:mb-3">Đa Dạng Dòng Xe</h3>
                <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                  Cung cấp các dòng xe 4 - 8 chỗ đời mới, sạch sẽ, được bảo dưỡng định kỳ để đảm bảo an toàn tuyệt đối cho chuyến đi của bạn.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="bg-slate-50 rounded-2xl p-5 md:p-8 border border-slate-100 hover:shadow-2xl transition duration-300 group flex items-start md:flex-col md:items-center text-left md:text-center">
              <div className="bg-secondary/10 shrink-0 w-14 h-14 md:w-20 md:h-20 rounded-2xl flex items-center justify-center mr-4 md:mr-0 md:mb-6 group-hover:bg-secondary group-hover:text-white transition">
                <ShieldCheck className="h-7 w-7 md:h-10 md:w-10 text-secondary group-hover:text-white" />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-bold text-slate-800 mb-1 md:mb-3">Thủ Tục Nhanh Gọn</h3>
                <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                  Không rườm rà giấy tờ. Hỗ trợ xét duyệt nhanh chóng, giao nhận xe tận nhà hoặc sân bay theo yêu cầu của khách hàng.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="bg-slate-50 rounded-2xl p-5 md:p-8 border border-slate-100 hover:shadow-2xl transition duration-300 group flex items-start md:flex-col md:items-center text-left md:text-center">
              <div className="bg-blue-100 shrink-0 w-14 h-14 md:w-20 md:h-20 rounded-2xl flex items-center justify-center mr-4 md:mr-0 md:mb-6 group-hover:bg-blue-600 group-hover:text-white transition">
                <Clock className="h-7 w-7 md:h-10 md:w-10 text-blue-600 group-hover:text-white" />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-bold text-slate-800 mb-1 md:mb-3">Hỗ Trợ 24/7</h3>
                <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                  Luôn đồng hành cùng bạn trên mọi nẻo đường. Đội ngũ kỹ thuật hỗ trợ xử lý sự cố xuyên suốt 24/7 nhanh chóng, nhiệt tình.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fleet Section */}
      <section id="fleet" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Danh Sách Xe & Bảng Giá</h2>
            <div className="h-1 w-20 bg-secondary mx-auto rounded-full"></div>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto text-lg">
              Bảng giá tham khảo cho dịch vụ thuê xe tự lái theo ngày. Vui lòng liên hệ để có giá tốt nhất cho lịch trình của bạn.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {cars.map((car) => (
              <div key={car.id} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 flex flex-col group">
                <div 
                  className="relative h-32 sm:h-48 overflow-hidden cursor-pointer"
                  onClick={() => setSelectedCar(car)}
                >
                  <img src={car.image} alt={car.name} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                  <div className="absolute top-2 right-2 sm:top-3 sm:right-3 bg-white/90 backdrop-blur-sm px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-semibold text-slate-700 shadow-sm">
                    {car.seats} Chỗ
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition duration-300 flex items-center justify-center">
                    <span className="bg-white/90 text-slate-800 text-sm font-bold px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition duration-300 shadow-lg transform translate-y-4 group-hover:translate-y-0">
                      Xem Chi Tiết
                    </span>
                  </div>
                </div>
                <div className="p-3 sm:p-6 flex-1 flex flex-col">
                  <h3 className="text-base sm:text-xl font-bold text-slate-800 mb-1 sm:mb-2 line-clamp-1">{car.name}</h3>
                  <div className="mt-auto pt-2 sm:pt-4 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <p className="text-xs sm:text-sm text-slate-500 mb-0.5 sm:mb-1">Giá thuê từ</p>
                      <p className="text-secondary font-extrabold text-sm sm:text-xl">{car.price}đ <span className="text-xs sm:text-sm font-normal text-slate-500">/ngày</span></p>
                    </div>
                  </div>
                  <a href={`https://zalo.me/0989557755`} target="_blank" rel="noreferrer" className="mt-3 sm:mt-5 block w-full text-center bg-primary hover:bg-blue-800 text-white font-semibold text-sm sm:text-base py-2 sm:py-3 rounded-lg sm:rounded-xl transition">
                    Đặt Xe Ngay
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Map Footer */}
      <footer id="contact" className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t-4 border-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <div className="flex items-center mb-6">
                <img src="/logo-hoangtan.png" alt="Hoàng Tấn" className="h-14 w-auto mr-3 object-contain bg-white/10 rounded-lg p-1" />
                <span className="font-bold text-3xl text-white tracking-tight">HOÀNG TẤN</span>
              </div>
              <p className="text-slate-400 mb-8 max-w-md leading-relaxed">
                Đồng hành cùng bạn trên mọi nẻo đường. Dịch vụ cho thuê xe uy tín, chất lượng hàng đầu với mức giá cạnh tranh nhất.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-accent mr-4 shrink-0" />
                  <div>
                    <p className="text-sm text-slate-500 font-medium">Hotline tư vấn 24/7</p>
                    <a href="tel:0989557755" className="text-2xl font-bold text-white hover:text-accent transition">0989 55 77 55</a>
                  </div>
                </div>
                <div className="flex items-start pt-4">
                  <MapPin className="h-6 w-6 text-accent mr-4 shrink-0" />
                  <div>
                    <p className="text-sm text-slate-500 font-medium">Địa chỉ</p>
                    <p className="text-lg text-white mb-2">Vui lòng xem trên bản đồ</p>
                    <a href="https://maps.app.goo.gl/MCbPQKryJtLxH9yXA" target="_blank" rel="noreferrer" className="inline-flex items-center text-accent hover:text-white transition font-medium">
                      Chỉ đường trên Google Maps <ChevronRight className="h-4 w-4 ml-1" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Map Placeholder/iframe */}
            <div className="h-80 bg-slate-800 rounded-2xl overflow-hidden shadow-inner border border-slate-700 relative">
               <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15674.375176166164!2d106.6880843!3d10.8423405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529004052f50d%3A0x6bba783307fc8c62!2zRDk!5e0!3m2!1svi!2s!4v1714541571477!5m2!1svi!2s" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Bản đồ địa chỉ Hoàng Tấn"
                className="absolute inset-0"
              ></iframe>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
            <p>&copy; {new Date().getFullYear()} Dịch Vụ Du Lịch Hoàng Tấn. All rights reserved.</p>
            <div className="mt-4 md:mt-0 flex space-x-4">
              <a href="#" className="hover:text-white transition">Chính sách bảo mật</a>
              <a href="#" className="hover:text-white transition">Điều khoản sử dụng</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col space-y-4 z-50">
        <a 
          href="https://zalo.me/0989557755" 
          target="_blank" 
          rel="noreferrer"
          className="bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 transition hover:scale-110 flex items-center justify-center pulse-ring group relative"
          aria-label="Chat Zalo"
        >
          <MessageCircle className="h-6 w-6" />
          <span className="absolute right-full mr-4 bg-white text-slate-800 text-sm font-semibold px-3 py-1 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition whitespace-nowrap pointer-events-none">
            Chat Zalo
          </span>
        </a>
        <a 
          href="tel:0989557755" 
          className="bg-secondary text-white p-4 rounded-full shadow-lg hover:bg-orange-600 transition hover:scale-110 flex items-center justify-center pulse-ring group relative"
          aria-label="Gọi ngay"
        >
          <Phone className="h-6 w-6" />
          <span className="absolute right-full mr-4 bg-white text-slate-800 text-sm font-semibold px-3 py-1 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition whitespace-nowrap pointer-events-none">
            0989 55 77 55
          </span>
        </a>
      </div>

      {/* Car Detail Modal */}
      {selectedCar && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm transition-opacity" onClick={() => setSelectedCar(null)}>
          <div 
            className="bg-white rounded-3xl w-full max-w-2xl overflow-hidden shadow-2xl relative flex flex-col max-h-[90vh]" 
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setSelectedCar(null)}
              className="absolute top-4 right-4 z-10 bg-white/80 hover:bg-white text-slate-800 p-2 rounded-full shadow-md backdrop-blur-sm transition"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="h-48 sm:h-72 w-full relative bg-slate-100">
              <img src={selectedCar.image} alt={selectedCar.name} className="w-full h-full object-cover" />
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-bold text-slate-800 shadow-sm flex items-center">
                <Users className="h-4 w-4 mr-2 text-primary" /> {selectedCar.seats} Chỗ Ngồi
              </div>
            </div>
            <div className="p-6 sm:p-8 overflow-y-auto">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-2">{selectedCar.name}</h2>
              <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-lg text-sm font-semibold mb-6">
                Xe Đời Mới - Tự Lái
              </div>
              <p className="text-slate-600 leading-relaxed text-base sm:text-lg mb-8">
                {selectedCar.description}
              </p>
              
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 mb-8 flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-500 font-medium mb-1">Giá thuê tự lái</p>
                  <p className="text-secondary font-extrabold text-2xl">{selectedCar.price}đ <span className="text-base font-normal text-slate-500">/ngày</span></p>
                </div>
              </div>

              <a 
                href={`https://zalo.me/0989557755`} 
                target="_blank" 
                rel="noreferrer" 
                className="block w-full text-center bg-primary hover:bg-blue-800 text-white font-bold text-lg py-4 rounded-xl transition shadow-lg shadow-blue-200"
              >
                Đặt Xe Ngay
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
