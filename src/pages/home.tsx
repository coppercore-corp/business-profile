import { JSXElementConstructor, ReactElement, ReactNode, ReactPortal } from "react";
import Carousel from 'react-material-ui-carousel';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { Paper, Button} from '@mui/material';
import Content from "../component/content";
import LazyLoad from "react-lazy-load";

const items = [
    {
        name: "On Service",
        description: "On service",
        image: "url(/images/carousel_onservice.png)"
    },
    {
        name: "2KVA 3 Phase Master Power AVR",
        description: "The power that maters",
        image: "url(/images/carousel_2kva3_master_power_avr.png)"
    },
    {
        name: "Dahua",
        description: "The brand that you can trust.",
        image: "url(/images/carousel_dahua_units.png)"
    }
];

function Item(props: { item: { image: any; name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; description: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; }; height: any; })
{
    return (
        <Paper sx={{
            borderRadius:0,
            backgroundImage:props.item.image,
            minHeight:props.height,
            backgroundColor: "rgba(0, 0, 0, 0)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            position:'relative',
            backgroundSize:'cover',
            }}
            >

            <div className="carousel__details">
                <h2>{props.item.name}</h2>
                <p>{props.item.description}</p>
            </div>
            <Button className="CheckButton">
                Check it out!
            </Button>
        </Paper>
    )
}
const theme = createTheme();
const CarouselContainer = styled('div')(() => ({
    '& div.car-body': {
        margin: '0'
    },
    '@media (max-width: 768px)': {
        margin: '1em 0'
    }
}));

function Home() {
    // const container_aboutus_ref = useRef(null);
    // const about_details_ref = useRef(null);
    // const about_img_ref = useRef(null);
    var carousel_height = ((window.innerWidth < 610)?420:620);


    return (
        <>
            <ThemeProvider theme={theme}>
                <CarouselContainer>
                    <Carousel interval={7000} sx={{marginBottom:1+'em'}}  className={"car-body"} >
                        {items.map( (item, i) => <Item key={i} item={item} height={carousel_height}/> )}
                    </Carousel>
                </CarouselContainer>
            </ThemeProvider>
            <LazyLoad >
                <Content
                    image={"/images/content_aboutus.png"}>
                    <h1>About Us</h1>
                    <p><b>COPPERCORE</b> is a company committed to performing Electrical and Mechanical Services extended to Civil and Architectural works established in year of 2017. A group of highly knowledgeable, experienced and creative engineers and team players in the industry.</p>
                    <p><b>COPPERCORE</b> was named after a cable called “Flexible Copper Core” that is used to transmit electricity and signal which we also define as a vessel of power, strength and unity.</p>
                    <p><b>COPPERCORE</b> was formed to fill the demand for practical knowledge and hands on experience in Maintenance, installation and trouble shooting and design of control systems.</p>
                    <p><b>COPPERCORE</b> is a leading corporation specializing in the installation of Closed Circuit Television (CCTV) systems for both residential and commercial customers. With its headquarters located in the heart of the city, the company boasts a team of highly skilled and experienced technicians who are dedicated to providing quality installation services to clients across the region.</p>
                    <p>Since its inception, <b>COPPERCORE</b> has earned a reputation for delivering reliable, innovative, and cost-effective security solutions. The company's commitment to excellence and customer satisfaction has made it a trusted name in the industry, with a loyal client base that continues to grow year after year.</p>
                    <p>At <b>COPPERCORE</b>, the team understands the importance of security in today's world, and they work tirelessly to ensure that their clients have access to the latest technology and products to keep their homes and businesses safe. From surveillance cameras to access control systems and alarm monitoring services, <b>COPPERCORE</b> offers a comprehensive range of solutions to meet the unique needs of each client.</p>
                    <p>With a focus on professionalism, integrity, and quality, <b>COPPERCORE</b> is committed to providing exceptional customer service and technical expertise. Whether you're a homeowner looking to install a basic CCTV system or a business owner seeking to protect your premises with advanced security solutions, <b>COPPERCORE</b> has the skills, experience, and resources to deliver the results you need.</p>
                </Content>
            </LazyLoad>
            <LazyLoad >
                <Content
                    image={"/images/content_mission_vision.png"}
                    direction={'rtl'} >
                    <h1>Mission</h1>
                    <p><b>COPPERCORE</b>'s mission is to provide exceptional security solutions to our clients through the latest technology and products, while maintaining the highest standards of professionalism, integrity, and quality. We strive to exceed our clients' expectations and build long-lasting relationships based on trust and reliability.</p>

                    <h1>Vision</h1>
                    <p><b>COPPERCORE</b>'s vision is to be the leading provider of security solutions in the industry, recognized for our innovative products, exceptional customer service, and technical expertise. We aim to expand our reach and services globally, while continuing to maintain our commitment to excellence and integrity. Our ultimate goal is to ensure that our clients feel safe and secure, knowing that they have the best security solutions in place to protect their homes and businesses.</p>
                </Content>
            </LazyLoad>

            <h1 className="--line-break">Services Offered</h1>

            <LazyLoad>
                <Content
                    image={"/images/content_service2.png"}
                    enable_background={true}
                    >
                    <h1>CCTV Security Installation & Planning</h1>
                    <p><b>COPPERCORE</b> is a leading provider of comprehensive CCTV Security Installation & Planning services, offering advanced surveillance solutions to ensure the safety and security of residential, commercial, and industrial properties. With our team of highly skilled technicians and expertise in cutting-edge CCTV technologies, we deliver tailored installations and strategic planning to meet the unique security requirements of our clients.</p>

                    <h3>CCTV Security Installation:</h3>
                    <p>At <b>COPPERCORE</b>, we understand the importance of a reliable and effective surveillance system in deterring crime, monitoring activities, and providing evidence in critical situations. Our CCTV Security Installation services encompass the design, installation, and configuration of state-of-the-art CCTV systems. We conduct a thorough assessment of your premises, considering factors such as layout, lighting conditions, and specific security concerns. Our experienced technicians then install high-quality cameras, strategically positioning them to provide maximum coverage and optimize surveillance capabilities. We ensure seamless integration with other security components, such as access control systems and alarm systems, to create a comprehensive security solution.</p>

                    <h3>System Configuration and Optimization:</h3>
                    <p><b>COPPERCORE</b>'s expertise extends beyond installation. We specialize in the configuration and optimization of CCTV systems to deliver superior performance and functionality. Our technicians carefully set up system parameters, including camera resolutions, frame rates, motion detection, and recording schedules, tailored to your specific needs. We optimize video storage capacity, network bandwidth, and user access rights to ensure efficient and secure operation of the CCTV system. Through meticulous configuration and optimization, we help clients achieve the best possible surveillance outcomes.</p>

                    <h3>Remote Monitoring and Mobile Access:</h3>
                    <p><b>COPPERCORE</b> integrates remote monitoring and mobile access capabilities into our CCTV installations, enabling clients to monitor their premises from anywhere, at any time. We configure the CCTV system to allow remote access via computers, smartphones, or tablets, empowering clients to view live feeds, playback recorded footage, and receive real-time alerts. Our user-friendly interfaces and secure connectivity options ensure convenient and reliable remote monitoring, enhancing situational awareness and facilitating prompt response to security incidents.</p>

                    <h3>Maintenance and Support:</h3>
                    <p>Regular maintenance is essential to ensure the long-term reliability and performance of CCTV systems. <b>COPPERCORE</b> offers comprehensive maintenance and support services to keep your CCTV system operating at its optimal level. Our technicians conduct routine inspections, cleaning, and software updates to identify and address potential issues proactively. We provide timely technical support and troubleshooting to resolve any system glitches or malfunctions efficiently, minimizing downtime and ensuring uninterrupted surveillance coverage.</p>

                    <h3>Strategic Planning and Consultation:</h3>
                    <p><b>COPPERCORE</b> takes a proactive approach to security by providing strategic planning and consultation services. Our experts work closely with clients to assess their security needs, evaluate vulnerabilities, and develop customized security strategies. We help identify the most suitable camera types, locations, and surveillance techniques to achieve comprehensive coverage and address specific security concerns. By leveraging our expertise and industry knowledge, we assist clients in implementing effective CCTV security measures aligned with their unique requirements.</p>

                    <p><b>COPPERCORE</b>'s CCTV Security Installation & Planning services provide clients with reliable, cutting-edge surveillance solutions to safeguard their premises. With our expertise, state-of-the-art technologies, and commitment to excellence, we deliver tailored CCTV installations, system optimization, remote monitoring, and ongoing maintenance and support. Trust CopperCore to enhance your security posture and provide you with peace of mind through our comprehensive CCTV security solutions.</p>

                </Content>
            </LazyLoad>

            <LazyLoad>
                <Content
                    image={"/images/content_service6.png"}
                    enable_background={true}
                    direction='rtl'
                    >
                    <h1>Solar Panel Installation Service & Planning</h1>
                    <p><b>COPPERCORE</b> is a trusted provider of Solar Panel Installation and Planning services, offering sustainable energy solutions that harness the power of solar technology. With our team of experienced professionals and expertise in solar energy systems, we deliver customized installations and strategic planning to meet the unique energy needs of residential, commercial, and industrial clients.</p>

                    <h3>Solar Panel Installation</h3>
                    <p>At <b>COPPERCORE</b>, we understand the significance of renewable energy and its potential to reduce carbon footprints and lower energy costs. Our Solar Panel Installation services encompass the design, installation, and integration of high-quality solar panels and associated equipment. We conduct a thorough assessment of your property, considering factors such as sun exposure, shading, roof structure, and energy consumption patterns. Our skilled technicians then install solar panels strategically to maximize energy production and optimize system efficiency. We ensure seamless integration with existing electrical infrastructure, adhering to industry standards and local regulations.</p>

                    <h3>Energy Consumption Analysis</h3>
                    <p><b>COPPERCORE</b> conducts detailed energy consumption analysis to determine the most effective solar solution for your specific needs. By evaluating your current energy usage, we identify opportunities for energy optimization and determine the appropriate size and configuration of your solar panel system. Our goal is to design and install a solar solution that maximizes energy generation, reduces reliance on the grid, and provides long-term cost savings.</p>

                    <h3>System Monitoring and Performance Optimization</h3>
                    <p>To ensure the optimal performance and reliability of your solar panel system, <b>COPPERCORE</b> provides system monitoring and performance optimization services. We integrate advanced monitoring technologies into your installation, allowing you to track real-time energy production, monitor system health, and identify potential issues promptly. Our team utilizes remote monitoring tools to analyze system data and optimize performance, ensuring that your solar panels operate at their maximum efficiency.</p>

                    <h3>Net Metering and Energy Storage Integration</h3>
                    <p><b>COPPERCORE</b> offers expertise in net metering and energy storage solutions to further enhance the benefits of your solar panel installation. We assist clients in connecting their solar systems to the grid through net metering, enabling them to offset their energy consumption and potentially earn credits for excess energy production. Additionally, we provide guidance on incorporating energy storage solutions, such as batteries, to store surplus energy generated by solar panels for use during low-sunlight periods or power outages.</p>

                    <h3>Maintenance and Support</h3>
                    <p><b>COPPERCORE</b> understands the importance of regular maintenance for the longevity and optimal performance of solar panel systems. We offer comprehensive maintenance and support services to keep your solar installation operating efficiently. Our technicians perform routine inspections, cleanings, and system checks to ensure that your panels are free from debris and operating at their peak capacity. We provide timely support and troubleshooting to address any issues promptly, ensuring minimal downtime and maximum energy production.</p>

                    <h3>Financial Analysis and Incentive Assistance:</h3>
                    <p>As part of our Solar Panel Installation and Planning services, <b>COPPERCORE</b> conducts financial analysis to assess the long-term benefits and return on investment of your solar installation. We provide insights into potential energy savings, payback periods, and available government incentives or rebates. Our team assists clients in navigating incentive programs and subsidy applications, ensuring that you take full advantage of financial opportunities associated with solar energy.</p>

                    <p><b>COPPERCORE</b>'s Solar Panel Installation and Planning services offer sustainable energy solutions tailored to your specific needs. With our expertise, high-quality products, and commitment to excellence, we help clients harness the power of solar energy, reduce their environmental impact, and achieve long-term energy savings. Trust CopperCore to provide you with a comprehensive solar installation that maximizes energy generation and supports your sustainable energy goals.</p>
                </Content>
            </LazyLoad>
            <LazyLoad >
                <Content
                    image={"/images/content_service1.png"}
                    enable_background={true}
                    >
                    <h1>Electrical Services</h1>
                    <p><b>COPPERCORE</b> takes pride in offering comprehensive electrical works services to meet the diverse needs of our valued clients. With our team of highly skilled and certified electricians, we provide reliable and efficient electrical solutions for residential, commercial, and industrial projects.</p>

                    <h3>Residential Electrical Works:</h3>
                    <p>At <b>COPPERCORE</b>, we understand the importance of a safe and functional electrical system in your home. Whether you're building a new house, renovating, or require electrical repairs, our experts are here to assist you. We handle a wide range of residential electrical services, including wiring installations, lighting fixture setups, electrical panel upgrades, outlet installations, and electrical troubleshooting. Our team ensures that all work is conducted in compliance with safety codes and regulations, prioritizing the safety and satisfaction of our clients.</p>

                    <h3>Commercial Electrical Works:</h3>
                    <p><b>COPPERCORE</b> recognizes the significance of reliable and efficient electrical systems for commercial establishments. Our experienced electricians are equipped to handle various commercial electrical projects, ranging from office buildings and retail spaces to restaurants and educational institutions. We offer services such as electrical system design and installation, power distribution, lighting solutions, energy-efficient upgrades, and electrical maintenance. Our goal is to provide tailored solutions that align with your specific requirements, ensuring smooth operations and optimal productivity for your business.</p>

                    <h3>Industrial Electrical Works:</h3>
                    <p>In industrial settings, a robust and dependable electrical infrastructure is vital for seamless operations. <b>COPPERCORE</b> specializes in industrial electrical works, serving manufacturing plants, warehouses, factories, and more. Our team has the expertise to design, install, and maintain industrial electrical systems, including machinery connections, power distribution systems, motor controls, electrical troubleshooting, and equipment upgrades. We adhere to industry standards and regulations, prioritizing safety, efficiency, and reliability in every project we undertake.</p>

                    <h3>Emergency Electrical Services:</h3>
                    <p>Electrical emergencies can occur unexpectedly, disrupting your daily routine or causing potential hazards. <b>COPPERCORE</b> offers prompt and reliable emergency electrical services to address any urgent electrical issues you may encounter. Our skilled electricians are available round the clock to provide quick diagnostics, repairs, and solutions to restore electrical functionality and ensure the safety of your premises.</p>

                    <p>At <b>COPPERCORE</b>, we are committed to delivering high-quality electrical works services with a focus on safety, reliability, and customer satisfaction. Whether it's residential, commercial, or industrial projects, our dedicated team is ready to handle your electrical needs with professionalism and expertise. Trust <b>COPPERCORE</b> to provide you with exceptional electrical solutions that meet the highest industry standards.</p>
                </Content>
            </LazyLoad>
            <LazyLoad >
                <Content
                    image={"/images/content_service3.png"}
                    enable_background={true}
                    direction='rtl'
                    >
                    <h1>Automation Control & Maintenance</h1>
                    <p><b>COPPERCORE</b> is proud to offer comprehensive Automation Control and Maintenance services, designed to optimize operational efficiency, enhance productivity, and streamline processes for our valued clients. With our team of skilled professionals and expertise in automation technologies, we deliver tailored solutions to meet the unique requirements of various industries.</p>

                    <h3>Automation Control Services</h3>
                    <p><b>COPPERCORE</b> understands the transformative power of automation in today's fast-paced business environment. Our Automation Control services encompass the design, installation, and integration of advanced control systems to automate and monitor various processes. Whether it's industrial machinery, manufacturing lines, or building management systems, our team works closely with clients to develop customized automation solutions that improve efficiency, reduce costs, and enhance overall performance. We specialize in programmable logic controllers (PLCs), human-machine interfaces (HMIs), SCADA systems, and other cutting-edge automation technologies.</p>

                    <h3>Maintenance Services</h3>
                    <p><b>COPPERCORE</b> recognizes that regular maintenance is crucial to ensure the longevity and optimal functionality of automation systems. Our Maintenance services are designed to keep your automation infrastructure in top condition, minimizing downtime and maximizing productivity. Our experienced technicians perform routine inspections, preventive maintenance, and troubleshooting to identify and address potential issues before they escalate. We offer proactive maintenance plans tailored to your specific needs, utilizing industry best practices and adhering to manufacturer recommendations to ensure that your automation systems operate reliably and efficiently.</p>

                    <h3>System Upgrades and Retrofitting</h3>
                    <p>As technology evolves, keeping pace with the latest advancements is essential for maintaining a competitive edge. <b>COPPERCORE</b> provides System Upgrades and Retrofitting services to help clients modernize their existing automation systems. Our experts assess your current setup, identify opportunities for improvement, and implement upgrades or retrofitting measures to enhance functionality, performance, and compatibility with the latest automation technologies. By upgrading your systems, you can benefit from increased efficiency, reduced downtime, and improved overall productivity.</p>

                    <h3>Integration Services</h3>
                    <p>Seamless integration of automation systems with other components of your infrastructure is key to achieving optimal results. <b>COPPERCORE</b> offers Integration services that facilitate the smooth collaboration between automation systems and other critical components such as data management systems, enterprise resource planning (ERP) software, and production management systems. Our experts work closely with your team to ensure effective data exchange, communication protocols, and synchronization, enabling streamlined operations and real-time decision-making.</p>

                    <p>At <b>COPPERCORE</b>, we are committed to providing exceptional Automation Control and Maintenance services that empower our clients to harness the full potential of automation technologies. Whether you require initial system implementation, ongoing maintenance, or system upgrades, our dedicated team is equipped with the knowledge and expertise to deliver customized solutions that align with your specific needs. Trust CopperCore to optimize your automation infrastructure, enhance productivity, and drive operational excellence.</p>
                </Content>
            </LazyLoad>
            <LazyLoad >
                <Content
                    image={"/images/content_service4.png"}
                    enable_background={true}
                >
                    <h1>HVAC & Refrigeration System Control</h1>
                    <p><b>COPPERCORE</b> is a trusted provider of HVAC (Heating, Ventilation, and Air Conditioning) & Refrigeration System Control services, offering comprehensive solutions to meet the cooling, heating, and refrigeration needs of our diverse client base. With our team of experienced professionals and expertise in HVAC and refrigeration control systems, we deliver reliable, energy-efficient, and cost-effective solutions tailored to your specific requirements.</p>

                    <h3>Design and Installation:</h3>
                    <p><b>COPPERCORE</b> specializes in designing and installing HVAC and refrigeration control systems that optimize comfort, efficiency, and reliability. Our expert engineers work closely with clients to understand their unique needs, assess the space, and develop customized designs that integrate cutting-edge technologies for heating, cooling, ventilation, and refrigeration. We ensure seamless integration with existing systems and adhere to industry standards and regulations throughout the installation process.</p>

                    <h3>Energy Management and Optimization:</h3>
                    <p>Energy efficiency is a crucial aspect of HVAC and refrigeration systems. <b>COPPERCORE</b> offers energy management and optimization services to help clients reduce energy consumption, minimize operational costs, and achieve sustainability goals. Our team utilizes advanced control algorithms, smart sensors, and building automation systems to optimize temperature control, ventilation, and refrigeration cycles. By implementing intelligent energy management strategies, we help clients achieve significant energy savings without compromising comfort or performance.</p>

                    <h3>System Upgrades and Retrofitting:</h3>
                    <p>Keeping up with technological advancements is essential to enhance the performance and efficiency of HVAC and refrigeration systems. <b>COPPERCORE</b> provides system upgrades and retrofitting services to modernize existing systems and maximize their capabilities. We evaluate your current infrastructure, identify areas for improvement, and implement upgrades or retrofitting measures such as replacing outdated components, integrating smart controls, or implementing energy-efficient technologies. Our goal is to enhance system performance, extend equipment lifespan, and reduce operating costs.</p>

                    <h3>Monitoring and Maintenance:</h3>
                    <p>Proactive monitoring and regular maintenance are critical for ensuring the smooth operation and longevity of HVAC and refrigeration systems. <b>COPPERCORE</b> offers comprehensive monitoring and maintenance services to detect and address potential issues before they escalate into major problems. Our technicians perform routine inspections, calibration, and testing to ensure optimal system performance. We also provide scheduled maintenance plans, emergency repairs, and 24/7 support to minimize downtime and keep your systems running at peak efficiency.</p>

                    <h3>Integration and Control Systems:</h3>
                    <p>Integration with building management systems and control platforms is essential for effective HVAC and refrigeration system control. <b>COPPERCORE</b> specializes in integrating HVAC and refrigeration systems with centralized control platforms, allowing for seamless management, monitoring, and control of various system components. We ensure interoperability, data exchange, and synchronization between different subsystems, enabling real-time monitoring, remote access, and efficient system control.</p>

                    <p><b>COPPERCORE</b>'s HVAC & Refrigeration System Control services are designed to meet the unique needs of commercial, industrial, and residential clients. With our expertise, cutting-edge technologies, and commitment to excellence, we deliver customized solutions that optimize comfort, improve energy efficiency, and ensure the reliable operation of HVAC and refrigeration systems. Trust <b>COPPERCORE</b> to provide you with comprehensive control services to enhance the performance and efficiency of your HVAC and refrigeration infrastructure.</p>
                </Content>
            </LazyLoad>
            <LazyLoad >
                <Content
                    image={"/images/content_service5.png"}
                    enable_background={true}
                    direction='rtl'
                >
                    <h1>Fire Sprinkler System Controls</h1>
                    <p><b>COPPERCORE</b> is a trusted provider of Fire Sprinkler System Controls, offering comprehensive solutions to enhance the safety and protection of buildings and occupants. With our team of experienced professionals and expertise in fire protection systems, we deliver reliable, efficient, and code-compliant fire sprinkler system controls tailored to your specific requirements.</p>

                    <h3>Design and Installation</h3>
                    <p><b>COPPERCORE</b> specializes in the design and installation of fire sprinkler system controls that prioritize early detection, rapid response, and effective suppression of fires. Our team works closely with clients to assess their unique needs, evaluate the building's layout and occupancy, and develop customized designs that comply with local fire codes and regulations. We ensure the seamless integration of control panels, valves, alarms, and other components to create a comprehensive fire sprinkler system that maximizes safety.</p>

                    <h3>Centralized Control and Monitoring</h3>
                    <p>Efficient control and monitoring are crucial for the effective operation of fire sprinkler systems. <b>COPPERCORE</b> provides centralized control solutions that enable real-time monitoring, remote access, and efficient management of fire sprinkler systems. Our integrated control platforms allow for quick system status checks, alarm notifications, and control of system components. We prioritize ease of use and provide user-friendly interfaces that empower facility managers and authorized personnel to respond swiftly to any fire emergency.</p>

                    <h3>Emergency Response and Alarms</h3>
                    <p>Timely response is critical in fire emergencies. <b>COPPERCORE</b> integrates state-of-the-art alarm systems into fire sprinkler controls to ensure immediate and effective notification of fire events. We design comprehensive alarm systems that include audible and visual alarms, strobe lights, and emergency communication interfaces. Our goal is to provide clear and accurate alerts that enable occupants to evacuate safely while alerting emergency responders to the exact location of the fire incident.</p>

                    <h3>Testing, Inspection, and Maintenance:</h3>
                    <p>Regular testing, inspection, and maintenance are essential for the reliability and effectiveness of fire sprinkler system controls. <b>COPPERCORE</b> offers comprehensive testing and inspection services to verify the functionality and compliance of fire sprinkler controls. Our trained technicians conduct routine inspections, flow tests, valve tests, and other necessary checks to ensure that the system operates at its optimal level. We provide maintenance plans tailored to your specific requirements, adhering to industry standards and regulatory guidelines.</p>

                    <h3>System Upgrades and Retrofitting</h3>
                    <p>As technology advances, upgrading and retrofitting fire sprinkler system controls can enhance the overall safety and efficiency of your fire protection infrastructure. <b>COPPERCORE</b> offers system upgrade and retrofitting services to modernize existing fire sprinkler systems. We assess your current setup, identify areas for improvement, and implement upgrades such as integrating smart control panels, remote monitoring capabilities, or advanced alarm systems. By enhancing the functionality and performance of your fire sprinkler controls, we help you stay at the forefront of fire safety technology.</p>

                    <p><b>COPPERCORE</b>'s Fire Sprinkler System Controls provide reliable, efficient, and code-compliant solutions to safeguard buildings and occupants. With our expertise, cutting-edge technologies, and commitment to excellence, we deliver customized control systems that optimize safety and protection. Trust <b>COPPERCORE</b> to provide you with comprehensive fire sprinkler system controls tailored to your specific needs, ensuring the utmost safety and peace of mind.</p>
                </Content>
            </LazyLoad>
            <LazyLoad >
                <Content
                    image={"/images/content_service8.png"}
                    enable_background={true}
                    >
                    <h1>Water System & Pupms Controls</h1>
                    <p><b>COPPERCORE</b> is a trusted provider of Water System and Pumps Control solutions, offering comprehensive services to optimize the efficiency, reliability, and performance of water systems and pumps. With our team of experienced professionals and expertise in water management technologies, we deliver customized control solutions tailored to meet the unique needs of various industries and applications.</p>

                    <h3>Water System Control:</h3>
                    <p><b>COPPERCORE</b> understands the importance of efficient water management for residential, commercial, and industrial settings. Our Water System Control services encompass the design, installation, and integration of advanced control systems that enable precise monitoring, regulation, and automation of water distribution and usage. We specialize in water flow control, pressure management, tank level monitoring, and remote access systems. By implementing intelligent control solutions, we help clients optimize water consumption, reduce operational costs, and ensure reliable water supply.</p>

                    <h3>Pumps Control:</h3>
                    <p>Efficient control of pumps is essential for reliable water distribution, pressure regulation, and wastewater management. <b>COPPERCORE</b> offers comprehensive Pumps Control solutions designed to maximize pump performance, energy efficiency, and system reliability. Our expertise extends to various pump types, including centrifugal pumps, submersible pumps, booster pumps, and sewage pumps. We utilize advanced control algorithms, variable frequency drives (VFDs), and sensor technologies to optimize pump operation, maintain desired water pressure, and reduce energy consumption.</p>

                    <h3>Remote Monitoring and Automation:</h3>
                    <p><b>COPPERCORE</b> integrates remote monitoring and automation capabilities into water system and pumps control solutions. Our advanced control platforms allow for real-time monitoring, data logging, and remote access to critical system parameters. We enable remote control of pumps, valves, and other components, providing facility managers with convenient access to monitor system performance, respond to alarms, and adjust settings as needed. Remote monitoring and automation enhance operational efficiency, reduce manual intervention, and facilitate proactive maintenance and troubleshooting.</p>

                    <h3>Alarm Systems and Emergency Response:</h3>
                    <p>Prompt detection and response to water system anomalies or emergencies are critical for minimizing damage and ensuring timely mitigation. <b>COPPERCORE</b> incorporates comprehensive alarm systems and emergency response mechanisms into water system and pumps control solutions. We design alarm systems that provide audible and visual alerts, enabling immediate response to leaks, pump failures, or other system abnormalities. Our integrated control platforms also facilitate automated emergency response protocols, such as shutting down pumps or activating backup systems when necessary.Prompt detection and response to water system anomalies or emergencies are critical for minimizing damage and ensuring timely mitigation. <b>COPPERCORE</b> incorporates comprehensive alarm systems and emergency response mechanisms into water system and pumps control solutions. We design alarm systems that provide audible and visual alerts, enabling immediate response to leaks, pump failures, or other system abnormalities. Our integrated control platforms also facilitate automated emergency response protocols, such as shutting down pumps or activating backup systems when necessary.</p>

                    <h3>Testing, Inspection, and Maintenance:</h3>
                    <p>Regular testing, inspection, and maintenance are vital for the reliable and efficient operation of water systems and pumps. <b>COPPERCORE</b> offers comprehensive testing and inspection services to ensure compliance with industry standards and regulatory requirements. Our technicians perform routine maintenance tasks, including system checks, calibration, and performance optimization. We also provide scheduled maintenance plans to identify and address potential issues proactively, minimizing downtime and optimizing system performance.</p>

                    <p><b>COPPERCORE</b>'s Water System and Pumps Control services deliver reliable, efficient, and customized solutions to optimize water management and pump operation. With our expertise, cutting-edge technologies, and commitment to excellence, we help clients achieve optimal water usage, energy efficiency, and system reliability. Trust CopperCore to provide you with comprehensive control solutions tailored to your specific needs, ensuring efficient water distribution, optimal pump performance, and reliable water system operation.CopperCore's Water System and Pumps Control services deliver reliable, efficient, and customized solutions to optimize water management and pump operation. With our expertise, cutting-edge technologies, and commitment to excellence, we help clients achieve optimal water usage, energy efficiency, and system reliability. Trust CopperCore to provide you with comprehensive control solutions tailored to your specific needs, ensuring efficient water distribution, optimal pump performance, and reliable water system operation.</p>
                </Content>
            </LazyLoad>

            <LazyLoad >
                <div className="section section_clients">
                    <div className="section__item--big">
                        <h1>Our Valued Clients</h1>
                        <div className="section__clients">

                            <div className="__clients__list">
                                <div className="__clients__list__item">
                                    <img src="/images/client21.png" />
                                    <div>
                                        <div className="__clients__list__bar">
                                            <div className="__clients__list__bar--title">Wilcon Depot</div>
                                            <div className="__clients__list__bar--subtitle">Your Winning Solution for all your construction needs.</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="__clients__list">
                                <div className="__clients__list__item">
                                    <img src="/images/client9.png" />
                                    <div>
                                        <div className="__clients__list__bar">
                                            <div className="__clients__list__bar--title">Saint Lukes Medical Center</div>
                                            <div className="__clients__list__bar--subtitle">Delivering Exceptional Healthcare with Compassion and Expertise.</div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="__clients__list">
                                <div className="__clients__list__item">
                                    <img src="/images/client16.png" />
                                    <div>
                                        <div className="__clients__list__bar">
                                            <div className="__clients__list__bar--title">Emapta</div>
                                            <div className="__clients__list__bar--subtitle">Your Trusted Partner in Outsourcing Solutions and Business Process Optimization.</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="__clients__list">
                                <div className="__clients__list__item">
                                    <img src="/images/client10.png" />
                                    <div>
                                        <div className="__clients__list__bar">
                                            <div className="__clients__list__bar--title">Oman Air</div>
                                            <div className="__clients__list__bar--subtitle">Elevating Travel Experiences with World-class Service and Unmatched Hospitality.</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="__clients__list">
                                <div className="__clients__list__item">
                                    <img src="/images/client14.png" />
                                    <div>
                                        <div className="__clients__list__bar">
                                            <div className="__clients__list__bar--title">Garena</div>
                                            <div className="__clients__list__bar--subtitle">Connecting the Dots</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="__clients__list">
                                <div className="__clients__list__item">
                                    <img src="/images/client17.png" />
                                    <div>
                                        <div className="__clients__list__bar">
                                            <div className="__clients__list__bar--title">Ateneo de Manila University</div>
                                            <div className="__clients__list__bar--subtitle">Inspiring Excellence, Shaping Future Leaders, and Igniting Minds.</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="__clients__list">
                                <div className="__clients__list__item">
                                    <img src="/images/client20.png" />
                                    <div>
                                        <div className="__clients__list__bar">
                                            <div className="__clients__list__bar--title">Palmer Fire, Safety & Security Solutions</div>
                                            <div className="__clients__list__bar--subtitle">Protecting Lives, Safeguarding Assets, and Ensuring Peace of Mind.</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="__clients__list">
                                <div className="__clients__list__item">
                                    <img src="/images/client12.png" />
                                    <div>
                                        <div className="__clients__list__bar">
                                            <div className="__clients__list__bar--title">Reedley International School</div>
                                            <div className="__clients__list__bar--subtitle">Nurturing Global Citizens, Inspiring Lifelong Learners, and Cultivating Excellence.</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="__clients__list">
                                <div className="__clients__list__item">
                                    <img src="/images/client15.png" />
                                    <div>
                                        <div className="__clients__list__bar">
                                            <div className="__clients__list__bar--title">JRP Designs Inc</div>
                                            <div className="__clients__list__bar--subtitle">Transforming Spaces with Innovative Designs and Timeless Elegance.</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="__clients__list">
                                <div className="__clients__list__item">
                                    <img src="/images/client19.png" />
                                    <div>
                                        <div className="__clients__list__bar">
                                            <div className="__clients__list__bar--title">BMW</div>
                                            <div className="__clients__list__bar--subtitle">The Ultimate Driving Experience, Combining Luxury, Performance, and Innovation.</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </LazyLoad>
        </>
    )
}
export default Home;