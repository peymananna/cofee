document.addEventListener("DOMContentLoaded", function () {
    // 1. اسکرول نرم برای منو
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            window.scrollTo({
                top: targetElement.offsetTop - 50,
                behavior: "smooth"
            });
        });
    });

    // 2. نمایش منو با افکت محو شدن
    const menuSection = document.getElementById("menu");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                menuSection.classList.add("show");
            }
        });
    }, { threshold: 0.3 });

    observer.observe(menuSection);

    // 3. تغییر رنگ هدر هنگام اسکرول
    const header = document.querySelector("header");
    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            header.style.backgroundColor = "#4e342e"; // رنگ تیره‌تر
        } else {
            header.style.backgroundColor = "#6f4e37"; // رنگ اولیه
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
        document.querySelector(".loader-wrapper").style.opacity = "0";
        setTimeout(() => {
            document.querySelector(".loader-wrapper").style.display = "none";
            document.querySelector("body").style.overflow = "auto"; // فعال کردن اسکرول بعد از لود شدن
        }, 500);
    }, 2000);
});

document.addEventListener("DOMContentLoaded", function () {
    const fadeElements = document.querySelectorAll(".fade-in");

    const fadeInOnScroll = () => {
        fadeElements.forEach((element) => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (elementTop < windowHeight - 100) {
                element.classList.add("show");
            }
        });
    };

    // اجرای تابع هنگام اسکرول
    window.addEventListener("scroll", fadeInOnScroll);

    // اجرای تابع در ابتدای بارگذاری
    fadeInOnScroll();
});