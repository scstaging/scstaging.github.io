 // Preloader
 function preloadImage(url) {
    let img = new Image();
    img.src = url;
}
let imgUrls = [];
// Add Residential Images
for (let i = 1; i < 70; i++) {
    imgUrls.push(`assets/caro/ResThumb${1}.png`);
}
// Add Residential Large Images
for (let i = 1; i < 70; i++) {
    imgUrls.push(`assets/caro/ResThumb${1}L.jpg`);
}
// Add Commercial Images
for (let i = 1; i < 22; i++) {
    imgUrls.push(`assets/caro/ComThumb${1}.png`);
}
// Add Commercial Large Images
for (let i = 1; i < 22; i++) {
    imgUrls.push(`assets/caro/ComThumb${1}L-min.jpg`);
}
// Added Contact Images
imgUrls.push(`assets/contact/Contact2.jpg`);
imgUrls.push(`assets/contact/DoorContact3.jpg`);
// Added header Images
imgUrls.push(`assets/headers/ComBanner2.jpg`);
imgUrls.push(`assets/headers/Comm_Header.png`);
imgUrls.push(`assets/headers/Contact-Us.png`);
imgUrls.push(`assets/headers/d-rr-colour-pattern-pic_orig.jpg`);
imgUrls.push(`assets/headers/d-rr-spec-pic_orig.jpg`);
imgUrls.push(`assets/headers/Dor_header.png`);
imgUrls.push(`assets/headers/Home_topBanner1b.png`);
imgUrls.push(`assets/headers/Interior_Header.png`);
imgUrls.push(`assets/headers/Materials_header-min.png`);
imgUrls.push(`assets/headers/Motif_banner2.jpg`);
imgUrls.push(`assets/headers/ResBanner3.png`);
imgUrls.push(`assets/headers/ResBanner4.jpg`);
imgUrls.push(`assets/headers/stock-options.jpg`);
imgUrls.push(`assets/headers/tower-light-spec-pic.jpg`);
imgUrls.push(`assets/headers/Towerlight.jpg`);
// Added Homepage Images
imgUrls.push(`assets/homepage/Commercial_2.png`);
imgUrls.push(`assets/homepage/Footer_home1.png`);
imgUrls.push(`assets/homepage/phone-background.png`);
imgUrls.push(`assets/homepage/Res_outdoor_home.png`);
imgUrls.push(`assets/homepage/Res_outdoor_home2.png`);
imgUrls.push(`assets/homepage/Res_outdoor_home3.png`);
imgUrls.push(`assets/homepage/Res_outdoor_home4.png`);
imgUrls.push(`assets/homepage/Residential_home1.png`);
imgUrls.push(`assets/homepage/Residential_Home2-min.png`);
// Added Materials Images
imgUrls.push(`assets/materials/Messurements.jpg`);
imgUrls.push(`assets/materials/Panels_finishes.jpg`);
// Nav Icons Images
imgUrls.push(`assets/nav-icons/Commercial_icon.jpg`);
imgUrls.push(`assets/nav-icons/Dor_icon-min.jpg`);
imgUrls.push(`assets/nav-icons/LightTower-min.jpg`);
imgUrls.push(`assets/nav-icons/residential_icon.jpg`);
imgUrls.push(`assets/nav-icons/Screen & Post System-min.jpg`);
// Patterns Images
imgUrls.push(`assets/patterns/grano_orig_Large.png`);
imgUrls.push(`assets/patterns/hai-panel-lit-back_Large.png`);
imgUrls.push(`assets/patterns/komiko_Large.png`);
imgUrls.push(`assets/patterns/koyo_orig_Large.png`);
imgUrls.push(`assets/patterns/lhasa_orig_Large.png`);
imgUrls.push(`assets/patterns/Motif_banner.jpeg`);
imgUrls.push(`assets/patterns/panel-lit-back-asanohafade-m_1_Large.png`);
imgUrls.push(`assets/patterns/panel-lit-back-barroko-m_1_Large.png`);
imgUrls.push(`assets/patterns/panel-lit-back-damask-m_2_Large.png`);
imgUrls.push(`assets/patterns/panel-lit-back-fall-m_5_Larger.png`);
imgUrls.push(`assets/patterns/panel-lit-back-fizz-m_Large.png`);
imgUrls.push(`assets/patterns/panel-lit-back-flux-m_Large.png`);
imgUrls.push(`assets/patterns/panel-lit-back-helix-m_Large.png`);
imgUrls.push(`assets/patterns/panel-lit-back-kanopy-m_Large.png`);
imgUrls.push(`assets/patterns/panel-lit-back-kasbah-Large.png`);
imgUrls.push(`assets/patterns/panel-lit-back-kubikfade-Large.png`);
imgUrls.push(`assets/patterns/panel-lit-back-kurv-m_Large.png`);
imgUrls.push(`assets/patterns/panel-lit-back-kyoto-Large.png`);
imgUrls.push(`assets/patterns/panel-lit-back-macchia-m_Large.png`);
imgUrls.push(`assets/patterns/panel-lit-back-marrakesh-Large.png`);
imgUrls.push(`assets/patterns/panel-lit-back-seven-m_1_Large.png`);
imgUrls.push(`assets/patterns/panel-lit-back-tangir-m_Large.png`);
imgUrls.push(`assets/patterns/panel-lit-back-taza-m-copy_Large.png`);
imgUrls.push(`assets/patterns/panel-lit-back-tejido-m_3_Large.png`);
imgUrls.push(`assets/patterns/panel-lit-back-tiwi-m_Large.png`);
imgUrls.push(`assets/patterns/panel-lit-back-waikoko-Large.png`);
imgUrls.push(`assets/patterns/panel-lit-back-waikoko-m_1_Large.png`);
// Phone Images
imgUrls.push(`assets/phone/Commercial.png`);
imgUrls.push(`assets/phone/Contact_Us.png`);
imgUrls.push(`assets/phone/Dorr_IKONIK.png`);
imgUrls.push(`assets/phone/Header.png`);
imgUrls.push(`assets/phone/IKONIK_phone2.png`);
imgUrls.push(`assets/phone/Residential_window.png`);
imgUrls.push(`assets/phone/Screen_Post.png`);
imgUrls.push(`assets/phone/Tower_light.png`);
// Preload
for (let i = 0; i < imgUrls.length; i++) {
    preloadImage(imgUrls[i]);
}