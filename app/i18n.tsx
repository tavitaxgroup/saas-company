"use client";

import { createContext, ReactNode, useContext, useEffect, useMemo, useState } from "react";

export type Locale = "en" | "vi" | "zh";

type TranslationValue = string | string[] | Record<string, unknown>;
type Dictionary = Record<string, TranslationValue>;

const storageKey = "sisbio-locale";

export const languageOptions: { code: Locale; label: string; shortLabel: string }[] = [
  { code: "vi", label: "Tiếng Việt", shortLabel: "VI" },
  { code: "zh", label: "繁體中文", shortLabel: "繁中" },
  { code: "en", label: "English", shortLabel: "EN" }
];

const en: Dictionary = {
  "nav.home": "Home",
  "nav.products": "Products",
  "nav.signalDirect": "Signal-Direct Imager",
  "nav.bioproduction": "Bioproduction Media & Feed",
  "nav.technology": "Technology",
  "nav.software": "Software",
  "nav.specifications": "Specifications",
  "nav.support": "Support",
  "nav.contact": "Contact Us",
  "common.inquireNow": "Inquire Now",
  "common.contactSisbio": "Contact SISBIO",
  "common.language": "Language",
  "common.backHome": "Back to SISBIO overview",
  "footer.note": "High-sensitivity imaging solutions and bioproduction media & feed products for research use. Not for use in diagnostic procedures.",
  "footer.signalNote": "Signal-Direct Imager is for research use only. Not for use in diagnostic procedures.",
  "footer.company": "SisBio Limited",
  "footer.address1": "4 F., No. 12, Ln. 345, Yangguang St., Neihu Dist.",
  "footer.address2": "Taipei City 114713, Taiwan (R.O.C.)",
  "footer.postal": "Postal code 114713",
  "home.eyebrow": "SISBIO Signal-Direct",
  "home.title": "High-sensitivity Western blot imaging for focused protein research.",
  "home.copy": "Explore Signal-Direct Imager, the direct-to-sensor imaging workflow, Max-One software, detailed specifications, and SISBIO product support.",
  "home.primary": "Explore Signal-Direct",
  "home.secondary": "Contact SISBIO",
  "home.overviewEyebrow": "Overview",
  "home.overviewTitle": "One clear path from product interest to technical evaluation.",
  "home.overviewCopy1": "SISBIO presents Signal-Direct as the flagship product, then separates the supporting technology, software, specifications, and inquiry workflow into dedicated pages so visitors can move directly to the information they need.",
  "home.overviewCopy2": "Bioproduction media and feed remain available as a related product line for upstream process development teams.",
  "home.cards": [
    "Product|Signal-Direct Imager|A compact chemiluminescence Western blot imager for high-sensitivity protein research workflows.|/signal-direct-imager",
    "Technology|Direct-to-sensor imaging|Understand how direct photon collection, large CMOS area, and wide dynamic range support stronger signal capture.|/technology",
    "Software|Max-One workflow|Move from image capture to contrast processing, quantitative review, and documentation in one platform.|/software",
    "Reference|Technical specifications|Review sensor size, active imaging area, formats, dimensions, operating range, and PC requirements.|/specifications"
  ],
  "home.stats": [
    "100x|More sensitive|Lens-free capture reduces light loss for weak Western blot signal.",
    "168 cm2|Large CMOS sensor|Wide sensor area captures the full blot with fewer repeat exposure steps.",
    "6.0 OD|Dynamic range|Quantitative capacity supports low-abundance targets and abundant controls.",
    "4 kg|Compact system|A small bench footprint fits shared and multi-user laboratory environments."
  ],
  "home.flagshipEyebrow": "Flagship Product",
  "home.flagshipTitle": "Signal-Direct Imager removes the lens path from chemiluminescence capture.",
  "home.flagshipCopy": "Western film is placed directly against the photosensor chip, helping the system collect more photons with less lens distortion and less light loss.",
  "home.flagshipList": [
    "Direct attachment to the photosensor chip",
    "Color protein marker capture for documentation",
    "Compact footprint for shared laboratory spaces"
  ],
  "home.flagshipLink": "View imaging technology",
  "home.bioEyebrow": "Related Product Line",
  "home.bioTitle": "Bioproduction media & feed for upstream process development.",
  "home.bioCopy": "Browse CHO media and feed products for mammalian cell culture, batch and fed-batch workflows, and process development.",
  "home.bioButton": "View bioproduction line",
  "home.ctaEyebrow": "Product Inquiry",
  "home.ctaTitle": "Need documentation, quotation, or distributor discussion?",
  "signal.heroEyebrow": "Signal-Direct Imager",
  "signal.heroTitle": "The revolution in simplicity and power.",
  "signal.heroCopy": "From image capture to final results, Signal-Direct and Max-One software offer a focused imaging experience for high-sensitivity Western blot documentation.",
  "signal.back": "Back to landing page",
  "signal.whyEyebrow": "Why Signal-Direct",
  "signal.whyTitle": "See more, measure everything, and preserve quantitative range.",
  "signal.whyCopy1": "Sensitivity is determined by the ability to collect photons from the blot and convert them into a strong, quantifiable signal while minimizing noise.",
  "signal.whyCopy2": "Signal-Direct uses a large CMOS sensor and 100 um x 100 um pixel area to collect substantially more photons than standard small-pixel CCD systems.",
  "signal.workflow": [
    "Capture|Direct-to-sensor chemiluminescence imaging|Western film is placed directly against the photosensor chip, removing the lens path that can introduce light loss and image distortion.",
    "Quantify|Publication-ready quantitative data|The system supports simultaneous detection of low-abundance targets and highly abundant controls without detector saturation.",
    "Document|Color protein marker capture|Dedicated color protein marker capture helps produce precise, clean, and visually consistent image documentation."
  ],
  "signal.multiEyebrow": "Designed for Multi-User Labs",
  "signal.multiTitle": "Where every inch matters.",
  "signal.multiCopy": "The Signal-Direct Imager is engineered for efficiency, with a footprint so compact it is comparable to a standard laptop. Labs can keep high-resolution imaging capability without dedicating a large room or extensive bench space.",
  "signal.docEyebrow": "Streamline Your Documentation",
  "signal.docTitle": "One platform for all your results.",
  "signal.docCopy": "Max-One software supports a seamless imaging experience, from dynamic capture to instant analysis and deeper review of quantitative results.",
  "signal.softwareLink": "View full software workflow",
  "signal.fastEyebrow": "A Faster Workflow",
  "signal.fastTitle": "A more beautiful image.",
  "signal.fastCopy1": "The system provides dedicated color protein marker capture for precise image documentation, helping teams produce clearer records with less repeat capture.",
  "signal.fastCopy2": "Automatic processing helps bring out maximum contrast and dynamic range, making documentation faster while preserving data-rich image output.",
  "signal.specEyebrow": "Technical Specifications",
  "signal.specTitle": "Detailed system reference.",
  "signal.specLead": "Specifications below are organized from the Signal Direct Imager brochure for evaluation and product inquiry.",
  "software.features": [
    "Dynamic capture technology automatically applies optimal settings.",
    "Signal intensity management helps prevent saturation as much as possible.",
    "Automatic processing brings out maximum contrast and dynamic range.",
    "Instant data analysis supports deeper review in Max-One software."
  ],
  "tech.heroEyebrow": "Imaging Technology",
  "tech.heroTitle": "Direct photon collection for stronger Western blot signal.",
  "tech.heroCopy": "Signal-Direct places the Western film directly against the photosensor chip, removing the traditional lens path that can reduce sensitivity and introduce distortion.",
  "tech.directEyebrow": "Direct-to-sensor imaging",
  "tech.directTitle": "Less light loss between the blot and detector.",
  "tech.directCopy": "By removing the lens path, the system can collect chemiluminescent signal closer to the source. That improves signal quality, reduces optical distortion, and supports faster documentation workflows.",
  "tech.sensorEyebrow": "Wide-area CMOS sensor",
  "tech.sensorTitle": "Large pixel area supports low-signal detection.",
  "tech.sensorCopy": "A 168 cm2 CMOS sensor and 100 um x 100 um pixel size collect more photons than standard small-pixel CCD systems, supporting stronger Signal-to-Noise Ratio for ECL imaging.",
  "tech.stats": [
    "100x|More sensitive collection|Direct-to-sensor chemiluminescence capture collects weak Western blot signal with less light loss and less lens distortion.",
    "168 cm2|Whole-blot capture|A large CMOS sensor captures the entire blot area at once, reducing repeat exposure work and stitching artifacts.",
    "6.0 OD|Quantitative capacity|Wide dynamic range supports low-abundance targets and highly abundant loading controls without detector saturation.",
    "5 sec|Custom detection|Custom exposure workflows are positioned for fast ECL documentation and exceptional dot blot detection."
  ],
  "tech.ctaEyebrow": "Next Step",
  "tech.ctaTitle": "Review the full product workflow and bench footprint.",
  "tech.ctaButton": "Explore product page",
  "software.heroEyebrow": "Max-One Software",
  "software.heroTitle": "One platform from image capture to final results.",
  "software.heroCopy": "Max-One supports dynamic capture, image processing, quantitative review, and documentation for Signal-Direct imaging workflows.",
  "software.workflow": [
    "Capture|Acquire images with guided exposure|Auto and custom exposure workflows help labs document chemiluminescence signals consistently.",
    "Process|Bring out contrast and clarity|Processing tools support clearer images while preserving the quantitative signal needed for review.",
    "Analyze|Move toward final documentation|Max-One supports deeper quantitative review and image export for publication and lab records."
  ],
  "software.docEyebrow": "Streamline Documentation",
  "software.docTitle": "Capture, process, analyze, and document in one focused workflow.",
  "software.docCopy": "The software workflow is designed to reduce repeat capture work and help multi-user labs generate consistent quantitative records.",
  "software.ctaEyebrow": "Software Inquiry",
  "software.ctaTitle": "Need Max-One software details or product documentation?",
  "software.ctaButton": "Request details",
  "spec.heroEyebrow": "Technical Specifications",
  "spec.heroTitle": "Signal-Direct Imager system reference.",
  "spec.heroCopy": "Review sensor performance, imaging area, data formats, power, operating conditions, dimensions, and software connection requirements.",
  "spec.tableEyebrow": "Specification Table",
  "spec.tableTitle": "Compact bench footprint, high-resolution data output.",
  "spec.tableLead": "Specifications are organized for product evaluation, quotation requests, and technical consultation with SISBIO.",
  "spec.ctaEyebrow": "Evaluation Support",
  "spec.ctaTitle": "Need brochure review or quotation preparation?",
  "support.heroEyebrow": "Support",
  "support.heroTitle": "Product consultation and documentation support.",
  "support.heroCopy": "Use this page to understand how SISBIO can support product information, technical consultation, quotation preparation, and distributor discussions.",
  "support.items": [
    "Product information|Request Signal-Direct product details, application notes, and workflow discussion.",
    "Quotation preparation|Share your procurement request so SISBIO can prepare quotation follow-up.",
    "Technical consultation|Discuss imaging workflow, sample type, software needs, and documentation expectations.",
    "Distributor discussion|Send company information for regional product or partnership conversation."
  ],
  "support.faqEyebrow": "FAQ",
  "support.faqTitle": "Common questions.",
  "support.faq": [
    "What is Signal-Direct Imager used for?|It is designed for chemiluminescence Western blot imaging and quantitative protein research documentation.",
    "Does the system support Max-One software?|Yes. Max-One supports image capture, dynamic capture workflows, analysis, and documentation.",
    "Can SISBIO support bioproduction product inquiries?|Yes. SISBIO can receive inquiries for CHO media, feed products, and related distributor or product information requests.",
    "How can customers request product information?|Customers can use the contact form to share contact information, company details, product interest, and request type."
  ],
  "support.ctaEyebrow": "Contact SISBIO",
  "support.ctaTitle": "Ready to send your product or distributor inquiry?",
  "support.ctaButton": "Open contact form",
  "bio.heroEyebrow": "Bioproduction",
  "bio.heroTitle": "CHO media and feed for upstream process development.",
  "bio.heroCopy": "SISBIO offers supporting media and feed products for mammalian cell culture, batch and fed-batch workflows, and production-oriented process development.",
  "bio.choEyebrow": "CHO Media",
  "bio.choTitle": "Chemically defined basal media for CHO workflows.",
  "bio.choLead": "Supporting product family for CHO-K1, CHO-S, CHO-DG44, CHOZN, and related mammalian cell culture workflows.",
  "bio.feedEyebrow": "Feed",
  "bio.feedTitle": "Feed supplements for fed-batch culture.",
  "bio.feedLead": "Feed products support bioproduction teams optimizing productivity, viable cell density, and process consistency across CHO, HEK293, Hybridoma, and other cell line applications.",
  "bio.choTag": "CHO media | CDM | ADCF",
  "bio.feedTag": "Bioproduction feed",
  "bio.ctaEyebrow": "Product Line Inquiry",
  "bio.ctaTitle": "Discuss media, feed, or distributor opportunities with SISBIO.",
  "bio.ctaButton": "Send inquiry",
  "bio.choProducts": [
    "CHO MaxA|Chemically defined basal medium for CHO-K1, CHO-S, and CHO-DG44 cells in batch and fed-batch culture processes.",
    "CHO MaxA5 Plus|ADCF CHO medium designed for CHO-S, CHO-K1, CHO-DG44, and CHOZN cell culture workflows.",
    "CHO MaxC|Basal medium option for CHO-K1, CHO-S, and CHOZN cells in chemically defined bioproduction processes.",
    "CHO MaxD|CHO media platform for batch and fed-batch culture where consistency and animal component control matter.",
    "CHO MaxX|CHO basal medium for scalable cell culture development and upstream process optimization.",
    "CHO MaxY|Chemically defined CHO medium positioned for production-oriented culture development.",
    "CHO MaxZ|Basal medium for CHO-S, CHO-K1, and CHO-DG44 cells in batch and fed-batch applications."
  ],
  "bio.feedProducts": [
    "MaxFA5|Feed supplement for CHO, HEK293, Hybridoma, and other cell line culture processes.",
    "MaxFA|Bioproduction feed product supporting CHO culture productivity and fed-batch process development.",
    "MaxFB|Feed formulation for mammalian cell culture workflows requiring repeatable nutrient support.",
    "MaxFX|Feed option for upstream bioprocessing teams optimizing viable cell density and protein expression."
  ],
  "contact.heroEyebrow": "Contact SISBIO",
  "contact.heroTitle": "Send product inquiries and distributor requests.",
  "contact.heroCopy": "Share your contact and company information so SISBIO can prepare product documentation, consultation, quotation, or partnership follow-up.",
  "contact.infoEyebrow": "Contact Information",
  "form.contactLegend": "Information of Contact Person",
  "form.companyLegend": "Company Information",
  "form.othersLegend": "Others",
  "form.name": "Name",
  "form.lastName": "Last name",
  "form.email": "E-Mail",
  "form.department": "Department",
  "form.jobTitle": "Job Title",
  "form.ePaper": "ePaper",
  "form.ePaperText": "Please mail me detail information of products, services and news of events.",
  "form.company": "Company",
  "form.url": "URL",
  "form.urlNote": "( Including http:// )",
  "form.address": "Address",
  "form.postal": "Postal Code",
  "form.state": "State",
  "form.country": "Country",
  "form.telephone": "Telephone",
  "form.phoneNote": "(Please enter full telephone number, including Country code, Area code.)",
  "form.fax": "Fax",
  "form.productLine": "Main Product Line",
  "form.subjects": "Subjects",
  "form.select": "--Please select--",
  "form.businessType": "Business Type",
  "form.verification": "Verification code",
  "form.changeImage": "Change Image",
  "form.privacy": "By submitting your contact information, you acknowledge that you consent to our processing data in accordance with the Privacy and Cookie Policy.",
  "form.submit": "Submit",
  "form.invalidCode": "Please enter the verification code shown in the image.",
  "form.openingEmail": "Opening email client for submission."
};

const vi: Dictionary = {
  ...en,
  "nav.home": "Trang chủ",
  "nav.products": "Sản phẩm",
  "nav.technology": "Công nghệ",
  "nav.software": "Phần mềm",
  "nav.specifications": "Thông số",
  "nav.support": "Hỗ trợ",
  "nav.contact": "Liên hệ",
  "common.inquireNow": "Gửi yêu cầu",
  "common.contactSisbio": "Liên hệ SISBIO",
  "common.language": "Ngôn ngữ",
  "common.backHome": "Quay lại tổng quan SISBIO",
  "footer.note": "Giải pháp hình ảnh độ nhạy cao và sản phẩm môi trường/feed bioproduction cho mục đích nghiên cứu. Không dùng trong quy trình chẩn đoán.",
  "footer.signalNote": "Signal-Direct Imager chỉ dùng cho mục đích nghiên cứu. Không dùng trong quy trình chẩn đoán.",
  "footer.postal": "Mã bưu chính 114713",
  "home.title": "Hình ảnh Western blot độ nhạy cao cho nghiên cứu protein chuyên sâu.",
  "home.copy": "Khám phá Signal-Direct Imager, quy trình chụp ảnh trực tiếp lên cảm biến, phần mềm Max-One, thông số chi tiết và hỗ trợ sản phẩm SISBIO.",
  "home.primary": "Khám phá Signal-Direct",
  "home.secondary": "Liên hệ SISBIO",
  "home.overviewEyebrow": "Tổng quan",
  "home.overviewTitle": "Lộ trình rõ ràng từ quan tâm sản phẩm đến đánh giá kỹ thuật.",
  "home.overviewCopy1": "SISBIO giới thiệu Signal-Direct là sản phẩm chủ lực, đồng thời tách công nghệ, phần mềm, thông số và quy trình liên hệ thành các trang riêng để người xem tìm đúng thông tin nhanh hơn.",
  "home.overviewCopy2": "Môi trường và feed bioproduction vẫn được trình bày như một dòng sản phẩm liên quan cho các nhóm phát triển quy trình upstream.",
  "home.flagshipEyebrow": "Sản phẩm chủ lực",
  "home.flagshipTitle": "Signal-Direct Imager loại bỏ đường quang qua thấu kính trong chụp chemiluminescence.",
  "home.flagshipCopy": "Màng Western được đặt trực tiếp lên chip cảm biến ảnh, giúp hệ thống thu nhiều photon hơn với ít méo ảnh và ít thất thoát ánh sáng hơn.",
  "home.flagshipList": ["Tiếp xúc trực tiếp với chip cảm biến ảnh", "Chụp marker protein màu phục vụ lưu hồ sơ", "Kích thước nhỏ gọn cho phòng lab dùng chung"],
  "home.flagshipLink": "Xem công nghệ hình ảnh",
  "home.bioEyebrow": "Dòng sản phẩm liên quan",
  "home.bioTitle": "Môi trường và feed bioproduction cho phát triển quy trình upstream.",
  "home.bioCopy": "Xem các sản phẩm môi trường CHO và feed cho nuôi cấy tế bào động vật có vú, quy trình batch/fed-batch và phát triển quy trình.",
  "home.bioButton": "Xem dòng bioproduction",
  "home.ctaEyebrow": "Yêu cầu sản phẩm",
  "home.ctaTitle": "Bạn cần tài liệu, báo giá hoặc trao đổi nhà phân phối?",
  "home.cards": [
    "Sản phẩm|Signal-Direct Imager|Máy chụp Western blot chemiluminescence nhỏ gọn cho quy trình nghiên cứu protein độ nhạy cao.|/signal-direct-imager",
    "Công nghệ|Chụp trực tiếp lên cảm biến|Tìm hiểu cách thu photon trực tiếp, vùng CMOS lớn và dải động rộng hỗ trợ bắt tín hiệu mạnh hơn.|/technology",
    "Phần mềm|Quy trình Max-One|Từ chụp ảnh đến xử lý tương phản, đánh giá định lượng và lưu hồ sơ trong một nền tảng.|/software",
    "Tham chiếu|Thông số kỹ thuật|Xem kích thước cảm biến, vùng chụp, định dạng, kích thước máy, điều kiện vận hành và yêu cầu PC.|/specifications"
  ],
  "home.stats": [
    "100x|Nhạy hơn|Chụp không qua thấu kính giảm thất thoát ánh sáng cho tín hiệu Western blot yếu.",
    "168 cm2|Cảm biến CMOS lớn|Vùng cảm biến rộng chụp toàn bộ blot với ít lần phơi sáng lặp lại hơn.",
    "6.0 OD|Dải động|Khả năng định lượng hỗ trợ mục tiêu hàm lượng thấp và control hàm lượng cao.",
    "4 kg|Hệ thống nhỏ gọn|Diện tích đặt máy nhỏ phù hợp môi trường lab dùng chung và nhiều người dùng."
  ],
  "signal.heroTitle": "Cuộc cách mạng về sự đơn giản và sức mạnh.",
  "signal.heroCopy": "Từ chụp ảnh đến kết quả cuối, Signal-Direct và phần mềm Max-One mang lại trải nghiệm hình ảnh tập trung cho lưu hồ sơ Western blot độ nhạy cao.",
  "signal.back": "Quay lại trang giới thiệu",
  "signal.whyEyebrow": "Vì sao chọn Signal-Direct",
  "signal.whyTitle": "Nhìn rõ hơn, đo toàn diện hơn và giữ vững dải định lượng.",
  "signal.whyCopy1": "Độ nhạy phụ thuộc vào khả năng thu photon từ blot và chuyển thành tín hiệu mạnh, có thể định lượng, đồng thời giảm nhiễu.",
  "signal.whyCopy2": "Signal-Direct dùng cảm biến CMOS lớn và pixel 100 um x 100 um để thu nhiều photon hơn đáng kể so với hệ CCD pixel nhỏ thông thường.",
  "software.features": [
    "Công nghệ chụp động tự động áp dụng thiết lập tối ưu.",
    "Quản lý cường độ tín hiệu giúp hạn chế bão hòa tối đa.",
    "Xử lý tự động làm nổi bật tương phản và dải động.",
    "Phân tích tức thì hỗ trợ đánh giá sâu hơn trong phần mềm Max-One."
  ],
  "tech.heroEyebrow": "Công nghệ hình ảnh",
  "tech.heroTitle": "Thu photon trực tiếp để có tín hiệu Western blot mạnh hơn.",
  "tech.heroCopy": "Signal-Direct đặt màng Western trực tiếp lên chip cảm biến ảnh, loại bỏ đường thấu kính truyền thống vốn có thể làm giảm độ nhạy và gây méo ảnh.",
  "software.heroEyebrow": "Phần mềm Max-One",
  "software.heroTitle": "Một nền tảng từ chụp ảnh đến kết quả cuối.",
  "spec.heroEyebrow": "Thông số kỹ thuật",
  "spec.heroTitle": "Tài liệu tham chiếu hệ thống Signal-Direct Imager.",
  "support.heroEyebrow": "Hỗ trợ",
  "support.heroTitle": "Hỗ trợ tư vấn sản phẩm và tài liệu.",
  "bio.heroEyebrow": "Bioproduction",
  "bio.heroTitle": "Môi trường CHO và feed cho phát triển quy trình upstream.",
  "contact.heroEyebrow": "Liên hệ SISBIO",
  "contact.heroTitle": "Gửi yêu cầu sản phẩm và nhà phân phối.",
  "contact.infoEyebrow": "Thông tin liên hệ",
  "form.contactLegend": "Thông tin người liên hệ",
  "form.companyLegend": "Thông tin công ty",
  "form.othersLegend": "Thông tin khác",
  "form.name": "Tên",
  "form.lastName": "Họ",
  "form.email": "E-Mail",
  "form.department": "Phòng ban",
  "form.jobTitle": "Chức danh",
  "form.company": "Công ty",
  "form.address": "Địa chỉ",
  "form.postal": "Mã bưu chính",
  "form.country": "Quốc gia",
  "form.telephone": "Điện thoại",
  "form.subjects": "Chủ đề",
  "form.select": "--Vui lòng chọn--",
  "form.businessType": "Loại hình kinh doanh",
  "form.verification": "Mã xác minh",
  "form.changeImage": "Đổi hình",
  "form.privacy": "Khi gửi thông tin liên hệ, bạn xác nhận đồng ý để chúng tôi xử lý dữ liệu theo Chính sách Quyền riêng tư và Cookie.",
  "form.submit": "Gửi",
  "form.invalidCode": "Vui lòng nhập đúng mã xác minh trong hình.",
  "form.openingEmail": "Đang mở ứng dụng email để gửi yêu cầu.",
  "signal.workflow": [
    "Chụp|Chụp chemiluminescence trực tiếp lên cảm biến|Màng Western được đặt trực tiếp lên chip cảm biến ảnh, loại bỏ đường thấu kính có thể gây thất thoát ánh sáng và méo ảnh.",
    "Định lượng|Dữ liệu định lượng sẵn sàng cho công bố|Hệ thống hỗ trợ phát hiện đồng thời mục tiêu hàm lượng thấp và control hàm lượng cao mà không làm bão hòa đầu dò.",
    "Lưu hồ sơ|Chụp marker protein màu|Chế độ chụp marker protein màu giúp tạo tài liệu hình ảnh chính xác, sạch và nhất quán."
  ],
  "signal.multiEyebrow": "Thiết kế cho lab nhiều người dùng",
  "signal.multiTitle": "Khi từng centimet đều quan trọng.",
  "signal.multiCopy": "Signal-Direct Imager được thiết kế để tối ưu hiệu quả, với footprint nhỏ gọn tương đương laptop tiêu chuẩn. Phòng lab có thể duy trì năng lực chụp ảnh độ phân giải cao mà không cần phòng riêng hay diện tích bàn lớn.",
  "signal.docEyebrow": "Tối ưu hóa tài liệu hóa",
  "signal.docTitle": "Một nền tảng cho toàn bộ kết quả.",
  "signal.docCopy": "Phần mềm Max-One hỗ trợ trải nghiệm chụp ảnh liền mạch, từ capture động đến phân tích tức thì và đánh giá sâu hơn dữ liệu định lượng.",
  "signal.softwareLink": "Xem toàn bộ quy trình phần mềm",
  "signal.fastEyebrow": "Quy trình nhanh hơn",
  "signal.fastTitle": "Hình ảnh đẹp và rõ hơn.",
  "signal.fastCopy1": "Hệ thống cung cấp chế độ chụp marker protein màu để tài liệu hóa hình ảnh chính xác, giúp nhóm nghiên cứu tạo hồ sơ rõ hơn với ít lần chụp lặp lại.",
  "signal.fastCopy2": "Xử lý tự động giúp làm nổi bật tương phản và dải động tối đa, tăng tốc tài liệu hóa trong khi vẫn giữ đầu ra hình ảnh giàu dữ liệu.",
  "signal.specEyebrow": "Thông số kỹ thuật",
  "signal.specTitle": "Tài liệu tham chiếu hệ thống chi tiết.",
  "signal.specLead": "Các thông số bên dưới được tổ chức từ brochure Signal Direct Imager để phục vụ đánh giá và yêu cầu sản phẩm.",
  "tech.directEyebrow": "Chụp trực tiếp lên cảm biến",
  "tech.directTitle": "Ít thất thoát ánh sáng hơn giữa blot và đầu dò.",
  "tech.directCopy": "Bằng cách loại bỏ đường thấu kính, hệ thống có thể thu tín hiệu chemiluminescence gần nguồn hơn. Điều này cải thiện chất lượng tín hiệu, giảm méo quang học và hỗ trợ quy trình tài liệu hóa nhanh hơn.",
  "tech.sensorEyebrow": "Cảm biến CMOS diện rộng",
  "tech.sensorTitle": "Diện tích pixel lớn hỗ trợ phát hiện tín hiệu thấp.",
  "tech.sensorCopy": "Cảm biến CMOS 168 cm2 và kích thước pixel 100 um x 100 um thu nhiều photon hơn so với hệ CCD pixel nhỏ tiêu chuẩn, hỗ trợ tỷ lệ tín hiệu/nhiễu mạnh hơn cho hình ảnh ECL.",
  "tech.stats": [
    "100x|Thu tín hiệu nhạy hơn|Chụp chemiluminescence trực tiếp lên cảm biến thu tín hiệu Western blot yếu với ít thất thoát ánh sáng và ít méo thấu kính hơn.",
    "168 cm2|Chụp toàn bộ blot|Cảm biến CMOS lớn chụp toàn bộ vùng blot cùng lúc, giảm thao tác phơi sáng lặp lại và lỗi ghép ảnh.",
    "6.0 OD|Khả năng định lượng|Dải động rộng hỗ trợ mục tiêu hàm lượng thấp và loading control hàm lượng cao mà không bão hòa đầu dò.",
    "5 sec|Phát hiện tùy chỉnh|Quy trình phơi sáng tùy chỉnh phù hợp cho tài liệu ECL nhanh và phát hiện dot blot vượt trội."
  ],
  "tech.ctaEyebrow": "Bước tiếp theo",
  "tech.ctaTitle": "Xem toàn bộ quy trình sản phẩm và footprint trên bàn lab.",
  "tech.ctaButton": "Khám phá trang sản phẩm",
  "software.heroCopy": "Max-One hỗ trợ chụp động, xử lý hình ảnh, đánh giá định lượng và tài liệu hóa cho quy trình hình ảnh Signal-Direct.",
  "software.workflow": [
    "Chụp|Thu ảnh với hướng dẫn phơi sáng|Quy trình phơi sáng tự động và tùy chỉnh giúp phòng lab ghi lại tín hiệu chemiluminescence ổn định.",
    "Xử lý|Làm rõ tương phản và độ nét|Công cụ xử lý hỗ trợ hình ảnh rõ hơn trong khi vẫn giữ tín hiệu định lượng cần cho đánh giá.",
    "Phân tích|Tiến tới tài liệu cuối|Max-One hỗ trợ đánh giá định lượng sâu hơn và xuất ảnh cho công bố hoặc hồ sơ phòng lab."
  ],
  "software.docEyebrow": "Tối ưu tài liệu hóa",
  "software.docTitle": "Chụp, xử lý, phân tích và lưu hồ sơ trong một quy trình tập trung.",
  "software.docCopy": "Quy trình phần mềm được thiết kế để giảm thao tác chụp lặp lại và giúp lab nhiều người dùng tạo hồ sơ định lượng nhất quán.",
  "software.ctaEyebrow": "Yêu cầu phần mềm",
  "software.ctaTitle": "Bạn cần thông tin phần mềm Max-One hoặc tài liệu sản phẩm?",
  "software.ctaButton": "Yêu cầu chi tiết",
  "spec.heroCopy": "Xem hiệu năng cảm biến, vùng chụp, định dạng dữ liệu, nguồn điện, điều kiện vận hành, kích thước và yêu cầu kết nối phần mềm.",
  "spec.tableEyebrow": "Bảng thông số",
  "spec.tableTitle": "Footprint nhỏ gọn, dữ liệu đầu ra độ phân giải cao.",
  "spec.tableLead": "Thông số được tổ chức để phục vụ đánh giá sản phẩm, yêu cầu báo giá và tư vấn kỹ thuật với SISBIO.",
  "spec.ctaEyebrow": "Hỗ trợ đánh giá",
  "spec.ctaTitle": "Bạn cần xem brochure hoặc chuẩn bị báo giá?",
  "support.heroCopy": "Trang này cho biết SISBIO có thể hỗ trợ thông tin sản phẩm, tư vấn kỹ thuật, chuẩn bị báo giá và trao đổi nhà phân phối như thế nào.",
  "support.items": [
    "Thông tin sản phẩm|Yêu cầu chi tiết Signal-Direct, application note và trao đổi quy trình.",
    "Chuẩn bị báo giá|Chia sẻ nhu cầu mua hàng để SISBIO chuẩn bị bước theo dõi báo giá.",
    "Tư vấn kỹ thuật|Trao đổi quy trình hình ảnh, loại mẫu, nhu cầu phần mềm và kỳ vọng tài liệu hóa.",
    "Trao đổi nhà phân phối|Gửi thông tin công ty cho cuộc trao đổi sản phẩm hoặc hợp tác theo khu vực."
  ],
  "support.faqTitle": "Câu hỏi thường gặp.",
  "support.faq": [
    "Signal-Direct Imager dùng để làm gì?|Thiết bị được thiết kế cho chụp Western blot chemiluminescence và tài liệu hóa nghiên cứu protein định lượng.",
    "Hệ thống có hỗ trợ phần mềm Max-One không?|Có. Max-One hỗ trợ chụp ảnh, quy trình chụp động, phân tích và tài liệu hóa.",
    "SISBIO có hỗ trợ yêu cầu về sản phẩm bioproduction không?|Có. SISBIO có thể tiếp nhận yêu cầu về môi trường CHO, sản phẩm feed và thông tin liên quan đến nhà phân phối hoặc sản phẩm.",
    "Khách hàng yêu cầu thông tin sản phẩm bằng cách nào?|Khách hàng có thể dùng form liên hệ để gửi thông tin liên hệ, công ty, sản phẩm quan tâm và loại yêu cầu."
  ],
  "support.ctaEyebrow": "Liên hệ SISBIO",
  "support.ctaTitle": "Bạn đã sẵn sàng gửi yêu cầu sản phẩm hoặc nhà phân phối?",
  "support.ctaButton": "Mở form liên hệ",
  "bio.heroCopy": "SISBIO cung cấp các sản phẩm môi trường và feed hỗ trợ nuôi cấy tế bào động vật có vú, quy trình batch/fed-batch và phát triển quy trình hướng sản xuất.",
  "bio.choEyebrow": "Môi trường CHO",
  "bio.choTitle": "Môi trường nền xác định hóa học cho quy trình CHO.",
  "bio.choLead": "Dòng sản phẩm hỗ trợ CHO-K1, CHO-S, CHO-DG44, CHOZN và các quy trình nuôi cấy tế bào động vật có vú liên quan.",
  "bio.feedTitle": "Bổ sung feed cho nuôi cấy fed-batch.",
  "bio.feedLead": "Sản phẩm feed hỗ trợ nhóm bioproduction tối ưu năng suất, mật độ tế bào sống và tính nhất quán quy trình trên CHO, HEK293, Hybridoma và các dòng tế bào khác.",
  "bio.ctaTitle": "Trao đổi về môi trường, feed hoặc cơ hội nhà phân phối với SISBIO.",
  "bio.ctaButton": "Gửi yêu cầu",
  "bio.choProducts": [
    "CHO MaxA|Môi trường nền xác định hóa học cho tế bào CHO-K1, CHO-S và CHO-DG44 trong quy trình batch và fed-batch.",
    "CHO MaxA5 Plus|Môi trường CHO ADCF được thiết kế cho quy trình nuôi cấy CHO-S, CHO-K1, CHO-DG44 và CHOZN.",
    "CHO MaxC|Tùy chọn môi trường nền cho CHO-K1, CHO-S và CHOZN trong quy trình bioproduction xác định hóa học.",
    "CHO MaxD|Nền tảng môi trường CHO cho batch và fed-batch khi tính nhất quán và kiểm soát thành phần động vật là trọng yếu.",
    "CHO MaxX|Môi trường nền CHO cho phát triển nuôi cấy có thể mở rộng và tối ưu quy trình upstream.",
    "CHO MaxY|Môi trường CHO xác định hóa học cho phát triển nuôi cấy hướng sản xuất.",
    "CHO MaxZ|Môi trường nền cho CHO-S, CHO-K1 và CHO-DG44 trong ứng dụng batch và fed-batch."
  ],
  "bio.feedProducts": [
    "MaxFA5|Bổ sung feed cho CHO, HEK293, Hybridoma và các quy trình nuôi cấy dòng tế bào khác.",
    "MaxFA|Sản phẩm feed bioproduction hỗ trợ năng suất nuôi cấy CHO và phát triển quy trình fed-batch.",
    "MaxFB|Công thức feed cho quy trình nuôi cấy tế bào động vật có vú cần hỗ trợ dinh dưỡng ổn định.",
    "MaxFX|Tùy chọn feed cho nhóm upstream tối ưu mật độ tế bào sống và biểu hiện protein."
  ],
  "contact.heroCopy": "Chia sẻ thông tin liên hệ và công ty để SISBIO chuẩn bị tài liệu sản phẩm, tư vấn, báo giá hoặc bước theo dõi hợp tác."
};

const zh: Dictionary = {
  ...en,
  "nav.home": "首頁",
  "nav.products": "產品",
  "nav.technology": "技術",
  "nav.software": "軟體",
  "nav.specifications": "規格",
  "nav.support": "支援",
  "nav.contact": "聯絡我們",
  "common.inquireNow": "立即詢問",
  "common.contactSisbio": "聯絡 SISBIO",
  "common.language": "語言",
  "common.backHome": "返回 SISBIO 總覽",
  "footer.note": "高靈敏度影像解決方案與生物製程培養基/補料產品，僅供研究使用，不適用於診斷程序。",
  "footer.signalNote": "Signal-Direct Imager 僅供研究使用，不適用於診斷程序。",
  "footer.postal": "郵遞區號 114713",
  "home.title": "專注蛋白質研究的高靈敏度 Western blot 影像系統。",
  "home.copy": "探索 Signal-Direct Imager、直達感測器影像流程、Max-One 軟體、詳細規格與 SISBIO 產品支援。",
  "home.primary": "探索 Signal-Direct",
  "home.secondary": "聯絡 SISBIO",
  "home.overviewEyebrow": "總覽",
  "home.overviewTitle": "從產品興趣到技術評估的清楚路徑。",
  "home.overviewCopy1": "SISBIO 以 Signal-Direct 作為核心產品，並將技術、軟體、規格與詢問流程分成專頁，讓訪客能直接找到所需資訊。",
  "home.overviewCopy2": "生物製程培養基與補料則作為上游製程開發團隊的相關產品線呈現。",
  "home.flagshipEyebrow": "旗艦產品",
  "home.flagshipTitle": "Signal-Direct Imager 移除化學冷光擷取中的鏡頭路徑。",
  "home.flagshipCopy": "Western film 直接接觸影像感測晶片，協助系統收集更多 photon，並降低鏡頭失真與光損失。",
  "home.flagshipList": ["直接貼合影像感測晶片", "彩色蛋白 marker 擷取以利文件化", "小型化機身適合共用實驗室"],
  "home.flagshipLink": "查看影像技術",
  "home.bioEyebrow": "相關產品線",
  "home.bioTitle": "用於上游製程開發的生物製程培養基與補料。",
  "home.bioCopy": "瀏覽適用於哺乳動物細胞培養、batch/fed-batch 流程與製程開發的 CHO 培養基與補料產品。",
  "home.bioButton": "查看生物製程產品線",
  "home.ctaEyebrow": "產品詢問",
  "home.ctaTitle": "需要文件、報價或經銷討論嗎？",
  "home.cards": [
    "產品|Signal-Direct Imager|小型化化學冷光 Western blot 影像系統，適用於高靈敏度蛋白質研究流程。|/signal-direct-imager",
    "技術|直達感測器影像|了解直接 photon 收集、大面積 CMOS 與寬動態範圍如何支援更強訊號擷取。|/technology",
    "軟體|Max-One 流程|在單一平台完成影像擷取、對比處理、定量檢視與文件化。|/software",
    "參考|技術規格|查看感測器尺寸、有效影像區、格式、尺寸、操作條件與 PC 需求。|/specifications"
  ],
  "home.stats": [
    "100x|更高靈敏度|無鏡頭擷取可降低弱 Western blot 訊號的光損失。",
    "168 cm2|大型 CMOS 感測器|大面積感測器可一次擷取完整 blot，減少重複曝光。",
    "6.0 OD|動態範圍|定量能力支援低豐度目標與高豐度 control。",
    "4 kg|小型系統|小型桌面佔用適合共用與多人使用實驗室。"
  ],
  "signal.heroTitle": "簡單與效能的革新。",
  "signal.heroCopy": "從影像擷取到最終結果，Signal-Direct 與 Max-One 軟體為高靈敏度 Western blot 文件化提供聚焦的影像體驗。",
  "signal.back": "返回首頁",
  "signal.whyEyebrow": "為何選擇 Signal-Direct",
  "signal.whyTitle": "看得更多、量測更完整，並保留定量範圍。",
  "signal.whyCopy1": "靈敏度取決於從 blot 收集 photon，並在降低雜訊的同時轉換為強而可定量的訊號。",
  "signal.whyCopy2": "Signal-Direct 採用大型 CMOS 感測器與 100 um x 100 um pixel 面積，比一般小 pixel CCD 系統收集更多 photon。",
  "software.features": [
    "動態擷取技術會自動套用最佳設定。",
    "訊號強度管理可盡可能避免飽和。",
    "自動處理可呈現最大對比與動態範圍。",
    "即時資料分析支援 Max-One 軟體中的深入檢視。"
  ],
  "tech.heroEyebrow": "影像技術",
  "tech.heroTitle": "直接 photon 收集，取得更強 Western blot 訊號。",
  "tech.heroCopy": "Signal-Direct 將 Western film 直接放置於影像感測晶片上，移除可能降低靈敏度並造成失真的傳統鏡頭路徑。",
  "software.heroEyebrow": "Max-One 軟體",
  "software.heroTitle": "從影像擷取到最終結果的一體化平台。",
  "spec.heroEyebrow": "技術規格",
  "spec.heroTitle": "Signal-Direct Imager 系統參考。",
  "support.heroEyebrow": "支援",
  "support.heroTitle": "產品諮詢與文件支援。",
  "bio.heroEyebrow": "生物製程",
  "bio.heroTitle": "用於上游製程開發的 CHO 培養基與補料。",
  "contact.heroEyebrow": "聯絡 SISBIO",
  "contact.heroTitle": "送出產品詢問與經銷需求。",
  "contact.infoEyebrow": "聯絡資訊",
  "form.contactLegend": "聯絡人資訊",
  "form.companyLegend": "公司資訊",
  "form.othersLegend": "其他",
  "form.name": "名字",
  "form.lastName": "姓氏",
  "form.department": "部門",
  "form.jobTitle": "職稱",
  "form.company": "公司",
  "form.address": "地址",
  "form.postal": "郵遞區號",
  "form.country": "國家",
  "form.telephone": "電話",
  "form.subjects": "主旨",
  "form.select": "--請選擇--",
  "form.businessType": "業務類型",
  "form.verification": "驗證碼",
  "form.changeImage": "更換圖片",
  "form.privacy": "送出聯絡資訊即表示您同意我們依據隱私權與 Cookie 政策處理資料。",
  "form.submit": "送出",
  "form.invalidCode": "請輸入圖片中顯示的驗證碼。",
  "form.openingEmail": "正在開啟電子郵件程式送出詢問。",
  "signal.workflow": [
    "擷取|直達感測器化學冷光影像|Western film 直接貼合影像感測晶片，移除可能造成光損失與影像失真的鏡頭路徑。",
    "定量|可用於發表的定量資料|系統支援同時偵測低豐度 target 與高豐度 control，並避免偵測器飽和。",
    "文件化|彩色蛋白 marker 擷取|專用彩色蛋白 marker 擷取可協助產出精準、乾淨且一致的影像文件。"
  ],
  "signal.multiEyebrow": "為多人使用實驗室設計",
  "signal.multiTitle": "每一寸空間都很重要。",
  "signal.multiCopy": "Signal-Direct Imager 以效率為核心設計，佔用空間小到可比擬標準筆電。實驗室不需要大型空間或大量桌面，也能保留高解析影像能力。",
  "signal.docEyebrow": "簡化文件化流程",
  "signal.docTitle": "所有結果的一體化平台。",
  "signal.docCopy": "Max-One 軟體支援從動態擷取、即時分析到定量結果深入檢視的順暢影像體驗。",
  "signal.softwareLink": "查看完整軟體流程",
  "signal.fastEyebrow": "更快速的流程",
  "signal.fastTitle": "更漂亮的影像。",
  "signal.fastCopy1": "系統提供專用彩色蛋白 marker 擷取以利精準影像文件化，協助團隊用更少重複擷取取得更清楚的紀錄。",
  "signal.fastCopy2": "自動處理有助呈現最大對比與動態範圍，在加速文件化的同時保留富含資料的影像輸出。",
  "signal.specEyebrow": "技術規格",
  "signal.specTitle": "詳細系統參考。",
  "signal.specLead": "以下規格依 Signal Direct Imager 型錄整理，供產品評估與詢問使用。",
  "tech.directEyebrow": "直達感測器影像",
  "tech.directTitle": "降低 blot 與偵測器之間的光損失。",
  "tech.directCopy": "移除鏡頭路徑後，系統可在更接近來源的位置收集化學冷光訊號。這能改善訊號品質、降低光學失真，並支援更快速的文件化流程。",
  "tech.sensorEyebrow": "大面積 CMOS 感測器",
  "tech.sensorTitle": "大 pixel 面積支援低訊號偵測。",
  "tech.sensorCopy": "168 cm2 CMOS 感測器與 100 um x 100 um pixel 尺寸可比標準小 pixel CCD 系統收集更多 photon，支援 ECL 影像更強的訊雜比。",
  "tech.stats": [
    "100x|更靈敏的收集|直達感測器化學冷光擷取可用較少光損失與鏡頭失真收集微弱 Western blot 訊號。",
    "168 cm2|完整 blot 擷取|大型 CMOS 感測器一次擷取完整 blot 區域，降低重複曝光與拼接問題。",
    "6.0 OD|定量能力|寬動態範圍支援低豐度 target 與高豐度 loading control，且不易造成偵測器飽和。",
    "5 sec|自訂偵測|自訂曝光流程適合快速 ECL 文件化與出色的 dot blot 偵測。"
  ],
  "tech.ctaEyebrow": "下一步",
  "tech.ctaTitle": "查看完整產品流程與桌面佔用空間。",
  "tech.ctaButton": "探索產品頁",
  "software.heroCopy": "Max-One 支援 Signal-Direct 影像流程中的動態擷取、影像處理、定量檢視與文件化。",
  "software.workflow": [
    "擷取|以導引曝光取得影像|自動與自訂曝光流程協助實驗室穩定記錄化學冷光訊號。",
    "處理|呈現對比與清晰度|處理工具可支援更清楚的影像，同時保留檢視所需的定量訊號。",
    "分析|進入最終文件化|Max-One 支援更深入的定量檢視與影像匯出，供發表與實驗室紀錄使用。"
  ],
  "software.docEyebrow": "簡化文件化",
  "software.docTitle": "在單一聚焦流程中完成擷取、處理、分析與文件化。",
  "software.docCopy": "軟體流程旨在減少重複擷取工作，並協助多人使用實驗室產出一致的定量紀錄。",
  "software.ctaEyebrow": "軟體詢問",
  "software.ctaTitle": "需要 Max-One 軟體細節或產品文件嗎？",
  "software.ctaButton": "索取詳細資訊",
  "spec.heroCopy": "查看感測器效能、影像區域、資料格式、電源、操作條件、尺寸與軟體連接需求。",
  "spec.tableEyebrow": "規格表",
  "spec.tableTitle": "小型桌面佔用，高解析資料輸出。",
  "spec.tableLead": "規格內容依產品評估、報價需求與 SISBIO 技術諮詢情境整理。",
  "spec.ctaEyebrow": "評估支援",
  "spec.ctaTitle": "需要型錄檢視或報價準備嗎？",
  "support.heroCopy": "本頁說明 SISBIO 如何支援產品資訊、技術諮詢、報價準備與經銷討論。",
  "support.items": [
    "產品資訊|索取 Signal-Direct 產品細節、應用資料與流程討論。",
    "報價準備|分享採購需求，讓 SISBIO 準備後續報價。",
    "技術諮詢|討論影像流程、樣本類型、軟體需求與文件化期待。",
    "經銷討論|提供公司資訊，以進行區域產品或合作洽談。"
  ],
  "support.faqTitle": "常見問題。",
  "support.faq": [
    "Signal-Direct Imager 用於什麼？|它設計用於化學冷光 Western blot 影像與定量蛋白質研究文件化。",
    "系統是否支援 Max-One 軟體？|是。Max-One 支援影像擷取、動態擷取流程、分析與文件化。",
    "SISBIO 是否支援生物製程產品詢問？|是。SISBIO 可接收 CHO 培養基、補料產品，以及相關經銷或產品資訊需求。",
    "客戶如何索取產品資訊？|客戶可透過聯絡表單提供聯絡資訊、公司資料、感興趣的產品與需求類型。"
  ],
  "support.ctaEyebrow": "聯絡 SISBIO",
  "support.ctaTitle": "準備送出產品或經銷詢問了嗎？",
  "support.ctaButton": "開啟聯絡表單",
  "bio.heroCopy": "SISBIO 提供支援哺乳動物細胞培養、batch/fed-batch 流程與生產導向製程開發的培養基與補料產品。",
  "bio.choEyebrow": "CHO 培養基",
  "bio.choTitle": "適用於 CHO 流程的化學定義基礎培養基。",
  "bio.choLead": "支援 CHO-K1、CHO-S、CHO-DG44、CHOZN 與相關哺乳動物細胞培養流程的產品系列。",
  "bio.feedTitle": "用於 fed-batch 培養的補料產品。",
  "bio.feedLead": "補料產品支援生物製程團隊在 CHO、HEK293、Hybridoma 與其他細胞株應用中優化產能、活細胞密度與流程一致性。",
  "bio.ctaTitle": "與 SISBIO 討論培養基、補料或經銷機會。",
  "bio.ctaButton": "送出詢問",
  "bio.choProducts": [
    "CHO MaxA|適用於 CHO-K1、CHO-S 與 CHO-DG44 細胞 batch 與 fed-batch 培養流程的化學定義基礎培養基。",
    "CHO MaxA5 Plus|專為 CHO-S、CHO-K1、CHO-DG44 與 CHOZN 細胞培養流程設計的 ADCF CHO 培養基。",
    "CHO MaxC|適用於 CHO-K1、CHO-S 與 CHOZN 細胞化學定義生物製程的基礎培養基選項。",
    "CHO MaxD|適用於重視一致性與動物來源成分控制的 batch 與 fed-batch CHO 培養基平台。",
    "CHO MaxX|用於可放大細胞培養開發與上游製程優化的 CHO 基礎培養基。",
    "CHO MaxY|定位於生產導向培養開發的化學定義 CHO 培養基。",
    "CHO MaxZ|適用於 CHO-S、CHO-K1 與 CHO-DG44 細胞 batch 與 fed-batch 應用的基礎培養基。"
  ],
  "bio.feedProducts": [
    "MaxFA5|適用於 CHO、HEK293、Hybridoma 與其他細胞株培養流程的補料添加物。",
    "MaxFA|支援 CHO 培養產能與 fed-batch 製程開發的生物製程補料產品。",
    "MaxFB|適用於需要穩定營養支援之哺乳動物細胞培養流程的補料配方。",
    "MaxFX|供上游生物製程團隊優化活細胞密度與蛋白表現的補料選項。"
  ],
  "contact.heroCopy": "提供您的聯絡與公司資訊，讓 SISBIO 可準備產品文件、諮詢、報價或合作後續聯繫。"
};

const dictionaries: Record<Locale, Dictionary> = { en, vi, zh };

type I18nContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
  list: (key: string) => string[];
};

const I18nContext = createContext<I18nContextValue | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  useEffect(() => {
    const storedLocale = window.localStorage.getItem(storageKey) as Locale | null;
    if (storedLocale && dictionaries[storedLocale]) {
      setLocaleState(storedLocale);
    }
  }, []);

  const setLocale = (nextLocale: Locale) => {
    setLocaleState(nextLocale);
    window.localStorage.setItem(storageKey, nextLocale);
    document.documentElement.lang = nextLocale === "zh" ? "zh-Hant-TW" : nextLocale;
  };

  const value = useMemo<I18nContextValue>(() => {
    const dictionary = dictionaries[locale];
    return {
      locale,
      setLocale,
      t: (key) => String(dictionary[key] ?? en[key] ?? key),
      list: (key) => {
        const value = dictionary[key] ?? en[key];
        return Array.isArray(value) ? value.map(String) : [];
      }
    };
  }, [locale]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used within I18nProvider");
  }
  return context;
}

export function splitRecord(item: string) {
  const [label, title, text, href] = item.split("|");
  return { label, title, text, href };
}
