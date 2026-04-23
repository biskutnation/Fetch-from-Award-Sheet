// the essentials must have
// SPREAD_ID, SHEET, email_template, email_title
// 060325 - UPDATED_SS_ID . SS = spreadsheet
// 210425 - pls make a function that output https://docs.google.com/spreadsheets/d/ + spread ID

function sheet_essentials(award_id) {
 
  const essentials = {
    KJA : {
      SPREAD_ID : "1aHlHqGvgKitASGv_d9_2ApoPF00_GcqzIU39c7_sMHM",
      SHEET : "responseKJA25",
      email_template : "KJA_emel",
      email_title : "KJA 2026 : Entry Received ({{xxyyzz}})"
    },    
    KPKT : {
      SPREAD_ID : "1BWZgtI5fmn4KlRR-_aVq15BGGGUDklRgB1n0ljjA2g0",
      SHEET : "responseKPKT26",
      email_template : "KPKT_emel",
      email_title : "AKeMedia KPKT 2026 : Penyertaan Diterima ({{xxyyzz}})",
      UPDATED_SS_ID : null // 270325 will update later
    },
    AGRO : {
      SPREAD_ID : "1qV96nOjoEENgxfDlZHTkfPeF9_dwk5Mg0TVQ-dSr0iU",
      SHEET : "responseAgro26",
      email_template : "Agro_emel",
      email_title : "Anugerah Media Agrobank 2026 : Penyertaan Diterima ({{xxyyzz}})",
      // UPDATED_SS_ID : "1Ed1oPGakcwMAMuwSxsdgxDw66g9fRyhGe-1d2EkAQI8" // 060325 for resend.gs
    },
    MUTIARA : {
      SPREAD_ID : "12K7ouhlzMrml95ucL-FRFPxWAA_B_GKbVgSMrJFX-IQ",
      SHEET : "responseMutiara26",
      email_template : "MUTIARA_emel",
      email_title : "Anugerah Media Mutiara 2026 : Penyertaan Diterima ({{xxyyzz}})",
      // UPDATED_SS_ID : "1Ed1oPGakcwMAMuwSxsdgxDw66g9fRyhGe-1d2EkAQI8" // 060325 for resend.gs
    },
    PAAB : {
      SPREAD_ID : "1wJELolVSTYGZfOM9JVZzIgOls72ASJ_bXDxw0Ptab4Y",
      SHEET : "responsePAAB26",
      email_template : "PAAB_emel",
      email_title : "Anugerah Media PAAB 2026 : Penyertaan Diterima ({{xxyyzz}})",
      // UPDATED_SS_ID : "1Ed1oPGakcwMAMuwSxsdgxDw66g9fRyhGe-1d2EkAQI8" // 060325 for resend.gs
    },
    KESUMA : {
      SPREAD_ID : "15OF7WRFYyFC8QhPoq51ziPmp4ZcLb0CFIvJxti9Psc8",
      SHEET : "responseAHP26",
      email_template : "AHP_emel",
      email_title : "Anugerah Hari Pekerja 2026 - Anugerah Media : Penyertaan Diterima ({{xxyyzz}})",
      // UPDATED_SS_ID : "1Ed1oPGakcwMAMuwSxsdgxDw66g9fRyhGe-1d2EkAQI8" // 060325 for resend.gs
    },
    KPA : {
      SPREAD_ID : "1nGlnaHHT6dD4crdQzNxCchqg5Lj3uAdrecv7UBCKoAM",
      SHEET : "responseKPA26",
      email_template : "KPA_emel",
      email_title : "KPA 2026 : Entry Received ({{xxyyzz}})",
      UPDATED_SS_ID : "1nDpIhMhHR4dW5UH-u8Cl-JoO_diU54nxkjqYg3Y-008"
      
    },
    CIDB : {
      SPREAD_ID : "1Y5WUZEvUdf7j2466yVB0J7Kxq-THxDZW80Z9H9hwPqc",
      SHEET : "responseCIDB26",
      email_template : "CIDB_emel",
      email_title : "AMP CIDB 2026 : Entry Received ({{xxyyzz}})"
    },
    PERKESO : {
      SPREAD_ID : "1_J790W2XDOiR4qpA0wmPZo4DISksC2pExtt97vhejRk",
      SHEET : "PERKESO_2025",
      email_template : "PERKESO_emel",
      email_title : "Anugerah Media PERKESO 2025 : Penyertaan Diterima ({{xxyyzz}})",
      UPDATED_SS_ID : "1ZEYr-DlgHYHrOcCXd1eIUujst_TN4C4rCOsllmuGxWk" // 280525 updated sheet for resend.gs
    },
    AMJ : {
      SPREAD_ID : "1ffRpTPh8TMsAJn6oBvTNW0YC2KTyuM16RkMI71s2KPQ", // 310525
      SHEET : "AMJ_2025",
      email_template : "Johor_emel",
      email_title : "Anugerah Media Johor 2025 : Penyertaan Diterima ({{xxyyzz}})",
      UPDATED_SS_ID : "1dFsSKOLKE6azGFJBA1v2JSaMto-VC9Wnt0xU4b-QyMI" // will update this
    },      
    "default" : {
      SPREAD_ID : "the default doesnt have spreadsheet",
      SHEET : "",
      email_template : "",
      email_title : "abcdefgijklmnopqrstuvwxyz"
    }
    
  }
  essentials[award_id].awdId = award_id
  if(!essentials[award_id].UPDATED_SHEET) essentials[award_id].UPDATED_SHEET = "merged" // for resend.gs

  return essentials[award_id] || essentials['default']
}

// 210426
function get_award_spreadsheet_url(award_id = "CIDB") {
  const obj = sheet_essentials(award_id)
  const prefix = "https://docs.google.com/spreadsheets/d/"

  const url = prefix + obj.SPREAD_ID

  return Logger.log(url)
}


// to serve sendingEmail()
function categoryObject(award_id) {
  const object = {

    PERKESO : {
                 'A. TV' : 'A. LAPORAN TV TERBAIK',
              'B. RADIO' : 'B. LAPORAN RADIO TERBAIK',
            'C. PODCAST' : 'C. PODCAST TERBAIK',
              'D. CETAK' : 'D. LAPORAN MEDIA CETAK TERBAIK',
             'E. PORTAL' : 'E. LAPORAN PORTAL BERITA TERBAIK',
            'F. DIGITAL' : 'F. LAPORAN MEDIA DIGITAL TERBAIK',
               'G. FOTO' : 'G. FOTOGRAFI TERBAIK',
      'H. JASA SYARIKAT' : 'H. JASA BAKTI UNTUK SYARIKAT',
      'I. JASA INDIVIDU' : 'I. JASA BAKTI UNTUK INDIVIDU'
    },
    KJA : {
        '1.Feature' : '1 - Journalism Award (Feature and News Feature)',
           '2.News' : '2 - News Reporting Award (Non-Feature)',
         '3.Sports' : '3 - Sports Reporting Award',
      '4.Broadcast' : '4 - Broadcast Journalism Award',
        '5.Sustain' : '5 - Sustainability Journalism Award',
       '6.Business' : '6 - Business & Economic Journalism Award',
      '7.Community' : '7 - Community Well-being Journalism Award',
    '8.SinglePhoto' : '8 - Photo Journalism Award',
     '9.EssayPhoto' : '9 - Photo Essay Award',
       '10.Digital' : '10 - Digital Economy Journalism Award',
                 BM : 'Print & Online Portal - Bahasa Melayu',
                ENG : 'Print & Online Portal - English',
                CHI : 'Print & Online Portal - Chinese',
               IBAN : 'Print & Online Portal - Iban',
                 TV : 'Broadcast Television & Online Video',
              Photo : 'Photography'
    },
    KPKT : {
           'A. Khas' : 'A. Anugerah Khas Menteri',
             'B. TV' : 'B. Anugerah Penyiaran Televisyen Terbaik',
   'C. Video Portal' : 'C. Anugerah Video Portal & Dalam Talian',
        'D. Artikel' : 'D. Anugerah Penerbitan Artikel Terbaik',
          'E. Radio' : 'E. Anugerah Penyiaran Radio Terbaik',
           'F. Foto' : 'F. Anugerah Kewartawanan Foto Terbaik',
         'G. Medsos' : "G. Anugerah 'Content' Media Sosial Terbaik",
        'I. Influencer' : "H. Anugerah 'Influencer' Terbaik"
    },
    AGRO : {
              "A. Pelajar" : "A. Anugerah Video Pendek Pelajar",      
               "B. Berita" : "B. Anugerah Media Cetak & Portal Berita - Berita",
              "C. Rencana" : "C. Anugerah Media Cetak & Portal Berita - Rencana",
            "D. TV Berita" : "D. Anugerah Media Penyiaran Televisyen & Video Dalam Talian - Berita",
              "E. TV Doku" : "E. Anugerah Media Penyiaran Televisyen & Video Dalam Talian - Dokumentari",
                "F. Radio" : "F. Anugerah Media Radio",
              "G. Digital" : "G. Anugerah Kewartawanan Teknologi & Digital Agrobank"
    },
    MUTIARA : {
              "A. Berita BM" : "A. Laporan Berita Terbaik - Bahasa Melayu",      
             "B. Berita ENG" : "B. Laporan Berita Terbaik - Bahasa Inggeris",
             "C. Berita CHI" : "C. Laporan Berita Terbaik - Bahasa Cina",
           "D. Berita TAMIL" : "D. Laporan Berita Terbaik - Bahasa Tamil",
                "E. Rencana" : "E. Anugerah Rencana Terbaik",
                     "F. TV" : "F. Anugerah Laporan TV Terbaik",
           "G. Video Pendek" : "G. Anugerah Video Pendek Terbaik",
            "H. Single Foto" : "H. Anugerah Foto Berita Terbaik",
              "I. Foto Esei" : "I. Anugerah Foto Esei Belum Diterbit Terbaik"             
      },
      "PAAB" : {      
               "A. TV" : "A. Laporan Berita TV & Video Dalam Talian Terbaik",
            "B. Cetak" : "B. Laporan Berita & Rencana Media Cetak Terbaik",
          "C. Digital" : "C. Laporan Berita & Rencana Digital Terbaik"
      },

      KESUMA: {
              "A. Individu" : "Anugerah Media Terbaik - Individu",
                "B. Agensi" : "Anugerah Media Terbaik - Agensi"           
      },
    KPA : {
               "1A. Feature" : "1A. Journalism Award (Feature and News Feature)",
             "1B. Broadcast" : "1B. Journalism Award (Broadcast)",
           "1C. Photography" : "1C. Journalism Award (Photography)",
                   "2. News" : "2. News Reporting Award (Non-Feature)",
                 "3. Sports" : "3. Sports Journalism Award",
               "4. Business" : "4. Business and Economic Reporting Award",
          "5. Environmental" : "5. Environmental Journalism Award",
          "6. Entertainment" : "6. Entertainment, Culture and Arts Reporting Award",
    "7. Photo Entertainment" : "7. Entertainment, Culture and Arts Photography Award",
              "8. Promising" : "8. Promising Journalist Award",
                   BM : 'Print & Online Portal - Bahasa Melayu',
                  ENG : 'Print & Online Portal - English',
                  CHI : 'Print & Online Portal - Chinese',
                   TV : 'Broadcast Television & Online Video',
                Photo : 'Photography'
    },
    CIDB : {
          'A. BERITA' : 'A. MEDIA CETAK & PORTAL BERITA - LAPORAN KHAS BERITA',
         'B. RENCANA' : 'B. MEDIA CETAK & PORTAL BERITA - RENCANA',
           'C. VIDEO' : 'C. MEDIA PENYIARAN TELEVISYEN & VIDEO DALAM TALIAN - LAPORAN KHAS & DOKUMENTARI',
           'D. RADIO' : 'D. MEDIA PENYIARAN RADIO',
            'E. FOTO' : 'E. FOTOGRAFI',
      'F. INFOGRAFIK' : 'F. INFOGRAFIK PEGUN',
     'G. VIDEOGRAFIK' : 'G. INFOGRAFIK VIDEO'
    },
    AMJ : {
      "category" : {      
                 "A. Perdana" : "A. Anugerah Perdana Menteri Besar Johor",
                    "B. Khas" : "B. Anugerah Khas Media Johor",
                 "C. Rencana" : "C. Rencana Terbaik",
            "D. Alam Sekitar" : "D. Berita Alam Sekitar Terbaik",
             "E. Pelancongan" : "E. Berita Pelancongan Terbaik",
                   "F. Sukan" : "F. Berita Sukan Terbaik",
                 "G. Ekonomi" : "G. Berita Ekonomi Terbaik",
                      "H. BM" : "H. Berita Bahasa Malaysia Terbaik",
                     "I. ENG" : "I. Berita Bahasa Inggeris Terbaik",
                     "J. CHI" : "J. Berita Bahasa Cina Terbaik",
                   "K. TAMIL" : "K. Berita Bahasa Tamil Terbaik",
          "L. Wartawan Cetak" : "L. Wartawan Media Cetak Terbaik",
              "M. Minat Foto" : "M. Gambar Minat Insani Terbaik",
             "N. Berita Foto" : "N. Gambar Berita Terbaik",
              "O. Sukan Foto" : "O. Gambar Sukan Terbaik",
              "P. Jurugambar" : "P. Jurugambar Terbaik",
        "Q. Bicarawara Radio" : "Q. Bicarawara Terbaik",
            "R. Berita Radio" : "R. Laporan Berita Terbaik",
               "S. Penyampai" : "S. Penyampai Radio Terbaik",
          "T. Pelancongan TV" : "T. Berita Pelancongan Terbaik",
                 "U. Khas TV" : "U. Laporan Khas Terbaik",
               "V. Berita TV" : "V. Laporan Berita Terbaik",
              "W. Jurukamera" : "W. Jurukamera Terbaik",
             "X. Wartawan TV" : "X. Wartawan Televisyen Terbaik"
      }
    },
    "default" : "no stuff here"
  }
  return object[award_id];
}
