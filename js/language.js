
    //English
$(function() {
    $(".en").click(function() {
        //language
        $(".language-selected").text("EN");
        //header
        $(".nav-item.active .nav-link").text("Home");
        $(".nav-item:nth-child(2) .nav-link").text("About");
        $(".nav-item:nth-child(3) .nav-link").text("Services");
        $(".nav-item:nth-child(4) .nav-link").text("Gallery");
        $(".nav-item:nth-child(5) .nav-link").text("Our Experts");
        $(".nav-item:nth-child(6) .nav-link").text("Contact Us");   
        // Spam 1
        $(".carousel-item.active .text-bg h1").text("Designing Unique Solutions");
        $(".carousel-item.active .text-bg span").text("We transform data into solutions, and processes into efficiency.");
        $(".carousel-item.active .text-bg .read_more").text("Read More");
        // Spam 2
        $(".carousel-item:not(.active) .text-bg h1").text("Shaping Your Business");
        $(".carousel-item:not(.active) .text-bg span").text("Smart data, wiser decisions: we're your IT consulting partner!");
        $(".carousel-item:not(.active) .text-bg .read_more").text("Read More");
        // Spam 3
        $(".carousel-item:last-child .text-bg h1").text("Designing Your Future");
        $(".carousel-item:last-child .text-bg span").text("Connecting technology with strategic vision: we're your partner in digital transformation");
        $(".carousel-item:last-child .text-bg .read_more").text("Read More");
        // About
        $(".about_main").html("About <span class='green'>Us</span>");
        $(".titlepage p").text("At Autosys Consulting, we are passionate about unlocking the potential of data and technology to drive business success. We are a team of IT consulting experts dedicated to delivering innovative solutions in data analytics and process automation.");
        $(".titlepage .read_more").text("Read More");
        // Services
        $(".serive_main").html("Our <span class='green'>Services</span>");
        $(".serive_tittle_1").text("Process Automation");
        $(".service_text_1").text("We design and implement process automation solutions that increase operational efficiency.");
        $(".serive_tittle_2").text("Predictive Modeling and Big Data Analysis");
        $(".service_text_2").text("Big data analysis to predict future trends and optimize your company's strategies.");
        $(".serive_tittle_3").text("Systems and API Integration");
        $(".service_text_3").text("We facilitate system integration and application interoperability through APIs.");
        $(".serive_tittle_4").text("Consulting and Strategic Advice");
        $(".service_text_4").text("Strategic consulting to help you develop a clear vision of how to get the most out of your data and technology.");
        $(".read_more").text("Read More");
        // Gallery
        $(".gallery_tittle_1").html("Our <span class='green'>Gallery</span>");
        $(".gallery_text_1").text("At Autosys Consulting, we are committed to delivering innovative solutions and tangible results that drive the growth and success of your company. Contact us today to find out how we can help you achieve your business goals!");
        $(".gallery_tittle_2").text("Process Automation");
        $(".gallery_text_2").text("Implementation of a process automation system for management.");
        $(".gallery_tittle_3").text("Predictive Modeling and Big Data Analysis");
        $(".gallery_text_3").text("Development of a predictive model to optimize management.");
        $(".gallery_tittle_4").text("Systems and API Integration");
        $(".gallery_text_4").text("Integration of customer management systems (CRM) and sales management systems (ERP).");
        $(".gallery_tittle_5").text("Consulting and Strategic Advice");
        $(".gallery_text_5").text("Strategic consulting for the digital transformation of a company.");
        // Design
        $(".design_tittle_1").html("New Design: <span class='green'>Blockchain</span>");
        $(".design_text_1").text("Have you considered how blockchain could revolutionize your industry? We are here to help you understand and make the most of this emerging technology.");
        $(".design_tittle_2").html("New Design: <span class='green'>Digital Transformation</span>");
        $(".design_text_2").text("If you're ready to take the next step towards digitalization, we're here to guide you through every stage of the process. Together, we can drive growth and innovation in your company.");
        $(".design_tittle_3").html("New Design: <span class='green'>Cybersecurity</span>");
        $(".design_text_3").text("Protecting your digital assets is key in today's era. We can offer you advanced cybersecurity solutions to keep your data safe and secure.");
        // Team
        $(".team_1").text("Michel Abello");
        $(".team_text_1").text("Our automation and data analysis specialist is here to improve the efficiency of your company. Use advanced tools to simplify processes and find ways to make your business even better. Their goal is to help you achieve success with smart and practical solutions.");
        $(".expert_team_tittle").text("Expert Team");
        // Contact
        $(".concat_title").text("Contact Us");
        $(".send_btn").text("Send");
        // Footer
        $(".footer1").text("Let Us Help You");
        $(".footer2").text("Information");
        $(".footer3").text("Our Design");
        $(".link_menu li:nth-child(1) a").text("Home");
        $(".link_menu li:nth-child(2) a").text("About");
        $(".link_menu li:nth-child(3) a").text("Services");
        $(".link_menu li:nth-child(4) a").text("Gallery");
        $(".link_menu li:nth-child(5) a").text("Our Experts");
        $(".link_menu li:nth-child(6) a").text("Contact Us");
        $(".variat.pad_roght2").text("Let us help you drive your business to success with customized solutions. Contact us today to start your journey to business growth.");
        $(".variat").text("Our Design is based on innovation and quality to create solutions that exceed your expectations. Discover how we can boost the success of your business.");
        $(".sub_btn").text("Subscribe");
        // Copyright
        $(".copy").text("© 2024 All Rights Reserved. Design by Michel.A");
        // Whatsapp
        $("#whatsappButton").attr("href", "https://api.whatsapp.com/send?phone=573106473446&text=Hello%20Autosys%20Consulting!%20We%20are%20interested%20in%20obtaining%20more%20information%20about%20the%20IT%20consulting%20services%20you%20offer.%20Could%20you%20provide%20me%20with%20details%20about%20your%20services%20and%20rates%3F");

    });
});

//Espanõl
$(function() {
    $(".es").click(function() {
        //language
        $(".language-selected").text("ES");
        //header
        $(".nav-item.active .nav-link").text("Inicio");
        $(".nav-item:nth-child(2) .nav-link").text("Nosotros");
        $(".nav-item:nth-child(3) .nav-link").text("Serivicios");
        $(".nav-item:nth-child(4) .nav-link").text("Galeria");
        $(".nav-item:nth-child(5) .nav-link").text("Nuestros Expertos");
        $(".nav-item:nth-child(6) .nav-link").text("Contactanos");
        //spam 1
        $(".carousel-item.active .text-bg h1").html("Diseñando Soluciones Únicas");
        $(".carousel-item.active .text-bg span").text("Transformamos datos en soluciones, y procesos en eficiencia.");
        $(".carousel-item.active .text-bg .read_more").text("Leer Más");
        //spam 2
        $(".carousel-item:not(.active) .text-bg h1").text("Modelando Su Negocio");
        $(".carousel-item:not(.active) .text-bg span").text("Datos inteligentes, decisiones más sabias: ¡Somos su socio en consultoría de TI!");
        $(".carousel-item:not(.active) .text-bg .read_more").text("Leer Más");
        //spam 3
        $(".carousel-item:last-child .text-bg h1").html("Diseñando Su Futuro");
        $(".carousel-item:last-child .text-bg span").text("Conectando tecnología con visión estratégica: somos tu socio en la transformación digital");
        $(".carousel-item:last-child .text-bg .read_more").text("Leer Más");
        //About
        $(".about_main").html("Acerca de <span class='green'>Nosotros</span>");
        $(".titlepage p").text("En Autosys Consulting, estamos apasionados por desbloquear el potencial de los datos y la tecnología para impulsar el éxito empresarial. Somos un equipo de expertos en consultoría de TI dedicados a ofrecer soluciones innovadoras en análisis de datos y automatización de procesos.");
        $(".titlepage .read_more").text("Leer Más");;
        //Service
        $(".serive_main").html("Nuestros <span class='green'>Servicios</span>");
        $(".serive_tittle_1").text("Automatización de Procesos");
        $(".service_text_1").text("Diseñamos e implementamos soluciones de automatización de procesos que aumentan la eficiencia operativa.");
        $(".serive_tittle_2").text("Modelado Predictivo y Análisis de Big Data");
        $(".service_text_2").text("Análisis de big data para predecir tendencias futuras y optimizar las estrategias de su empresa.");
        $(".serive_tittle_3").text("Integración de Sistemas y API");
        $(".service_text_3").text("Facilitamos la integración de sistemas y la interoperabilidad de aplicaciones a través de APIs.");
        $(".serive_tittle_4").text("Consultoría y Asesoramiento Estratégica");
        $(".service_text_4").text("Asesoramiento estratégico para ayudarlo a desarrollar una visión clara de cómo obtener el máximo provecho de sus datos y tecnología.");
        $(".read_more").text("Leer Más");
        //Gallery
        $(".gallery_tittle_1").html("Nuestra <span class='green'>galería</span>");
        $(".gallery_text_1").text("En Autosys Consulting, nos comprometemos a ofrecer soluciones innovadoras y resultados tangibles que impulsen el crecimiento y éxito de su empresa. ¡Contáctenos hoy para averiguar cómo podemos ayudarlo a alcanzar sus objetivos empresariales!");
        $(".gallery_tittle_2").text("Automatización de Procesos");
        $(".gallery_text_2").text("Implementación de un sistema de automatización de procesos para la gestión.");
        $(".gallery_tittle_3").text("Modelado Predictivo y Análisis de Big Data");
        $(".gallery_text_3").text("Desarrollo de un modelo predictivo para optimizar la gestión.");
        $(".gallery_tittle_4").text("Integración de Sistemas y API");
        $(".gallery_text_4").text("Integración de sistemas de gestión de clientes (CRM) y sistemas de gestión de ventas (ERP).");
        $(".gallery_tittle_5").text("Asesoramiento Estratégico y Consultoría");
        $(".gallery_text_5").text("Consultoría estratégica para la transformación digital de una empresa.");
        //Design
        $(".design_tittle_1").html("Nuevo Diseño: <span class='green'>Blockchain</span>");
        $(".design_text_1").text("¿Has considerado cómo blockchain podría revolucionar tu industria? Estamos aquí para ayudarte a entender y aprovechar al máximo esta tecnología emergente.");

        $(".design_tittle_2").html("Nuevo Diseño: <span class='green'>Transformación Digital</span>");
        $(".design_text_2").text("Si estás listo para dar el siguiente paso hacia la digitalización, estamos aquí para guiarte en cada etapa del proceso. Juntos, podemos impulsar el crecimiento y la innovación en tu empresa.");

        $(".design_tittle_3").html("Nuevo Diseño: <span class='green'>Ciberseguridad</span>");
        $(".design_text_3").text("Proteger tus activos digitales es clave en la era actual. Podemos ofrecerte soluciones avanzadas de ciberseguridad para mantener tus datos seguros y protegidos.");

        //Team
        $(".team_1").text("Michel Abello");
        $(".team_text_1").text("Nuestro especialista en automatización y análisis de datos está aquí para mejorar la eficiencia de su empresa. Utilice herramientas avanzadas para simplificar procesos y encontrar formas de hacer que su negocio sea aún mejor. Su objetivo es ayudarlo a alcanzar el éxito con soluciones inteligentes y prácticas.");
        $(".expert_team_tittle").text("Equipo de Expertos");
        });
        //contact
        $(".concat_title").text("Contacto");
        $(".send_btn").text("Enviar");
        //footer
        $(".footer1").text("AYÚDANOS A CONOCERTE");
        $(".footer2").text("INFORMACIÓN");
        $(".footer3").text("NUESTRO Diseño");
        $(".link_menu li:nth-child(1) a").text("Inicio");
        $(".link_menu li:nth-child(2) a").text("Acerca de");
        $(".link_menu li:nth-child(3) a").text("Servicios");
        $(".link_menu li:nth-child(4) a").text("Galería");
        $(".link_menu li:nth-child(5) a").text("Nuestros Expertos");
        $(".link_menu li:nth-child(6) a").text("Contáctanos");
        $(".variat pad_roght2").text("Permítenos ayudarte a llevar tu negocio al éxito con soluciones personalizadas. Contáctanos hoy mismo para comenzar tu camino hacia el crecimiento empresarial.");
        $(".variat").text("Nuestro diseño se basa en innovación y calidad para crear soluciones que superen tus expectativas. Descubre cómo podemos impulsar el éxito de tu negocio.");
        $(".sub_btn").text("suscribir");
        //copyright
        $(".copy").text("© 2024 Todos los derechos reservados. Diseño por Michel.A");
        // Whatsapp
        $("#whatsappButton").attr("href", "https://api.whatsapp.com/send?phone=573106473446&text=¡Hola%20Autosys%20Consulting!%20Nos%20encontramos%20interesados%20en%20obtener%20más%20información%20sobre%20los%20servicios%20de%20consultoría%20de%20IT%20que%20ofrecen.%20¿Podrían%20proporcionarme%20detalles%20sobre%20sus%20servicios%20y%20tarifas%3F");

    });
