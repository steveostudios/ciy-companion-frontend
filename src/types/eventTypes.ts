export interface Event {
  attendee_contact: EventAttendeeContact;
  bte: EventBte;
  connect: EventConnect;
}

export interface EventAttendeeContact {
  show: boolean;
  contact: boolean;
}

export interface EventBte {
  show: boolean;
  ministry_interest: {
    show: boolean;
    url: string;
  };
  engage_trip_interest: {
    show: boolean;
    content: string;
    sections: EventBteEngageTripInterestSection[];
  };
  small_group_locations: {
    show: boolean;
    content: string;
  };
  move_intern_interest: {
    show: boolean;
    content: string;
    learn_more_url: string;
    signup_url: string;
  };
  mix_intern_interest: {
    show: boolean;
    content: string;
    learn_more_url: string;
    signup_url: string;
  };
  kingdom_worker_crash_nomination: {
    show: boolean;
    content: string;
    url: string;
  };
  college_partners: {
    show: boolean;
    description: string;
    college: EventBteCollegePartner[];
  };
  convos_beta: {
    show: boolean;
    content: string;
    beta_url: string;
  };
  youth_ministry_resources: {
    show: boolean;
    url: string;
  };
  session_4: {
    show: boolean;
    resource_url: string;
  };
  preteen_ministry_resources: {
    show: boolean;
    url: string;
  };
  connect: {
    show: boolean;
    service: {
      facebook: string;
      instagram: string;
      tiktok: string;
      podcast: string;
      spotify: string;
    };
  };
  decision: {
    show: boolean;
    first_time_decision: {
      show: boolean;
      content: string;
    };
    recommitment: {
      show: boolean;
      content: string;
    };
    vocational_ministry: {
      show: boolean;
      content: string;
    };
    kingdom_worker: {
      show: boolean;
      content: string;
    };
  };
}

interface EventConnect {
  show: boolean;
  service: {
    facebook: string;
    instagram: string;
    spotify: string;
    podcast: string;
    tiktok: string;
}

interface EventBteEngageTripInterestSection {
  name: string;
  description: string;
  content: string;
  interest_url: string;
  interest_url_name: string;
}

interface EventBteCollegePartner {
  image: WPImage;
  name: string;
  url: string;
}

interface WPImage {
  ID: number;
  id: number;
  title: string;
  filename: string;
  filesize: number;
  url: string;
  link: string;
  alt: string;
  author: string;
  description: string;
  caption: string;
  name: string;
  status: string;
  uploaded_to: number;
  date: string;
  modified: string;
  menu_order: number;
  mime_type: string;
  type: string;
  subtype: string;
  icon: string;
  width: number;
  height: number;
  sizes: {
    thumbnail: string;
    "thumbnail-width": number;
    "thumbnail-height": number;
    medium: string;
    "medium-width": number;
    "medium-height": number;
    medium_large: string;
    "medium_large-width": number;
    "medium_large-height": number;
    large: string;
    "large-width": number;
    "large-height": number;
    "1536x1536": string;
    "1536x1536-width": number;
    "1536x1536-height": number;
    "2048x2048": string;
    "2048x2048-width": number;
    "2048x2048-height": number;
  };
}

export const test = [
  {
    acf: {
      attendee_contact: {
        show: false,
        contact: false,
      },
      bte: {
        show: true,
        ministry_interest: {
          show: false,
          url: "https://google.com",
        },
        engage_trip_interest: {
          show: true,
          content:
            '<p><span class="ui-provider gr b c d e f g h i j k l m n o p q r s t u v w x y z ab ac ae af ag ah ai aj ak" dir="ltr">Engage offers two kinds of trips- Group and Individual. In order to register as a group, you need at least two students and at least one adult. Individuals are any students attending a trip without an adult leader. So even if a group of friends are going on the same trip together, if they don&#8217;t have an adult leader traveling with them, they are considered individuals. </span></p>\n',
          sections: [
            {
              name: "Groups",
              description: "",
              content:
                "<h2>2024 GROUP DATES AND LOCATIONS</h2>\n<p>Northern Ireland RIOT 0: January 3-11</p>\n<p>Northern Ireland Salt Factory Sports: June 6-17</p>\n<p>Northern Ireland RIOT 1: June 7-16</p>\n<p>Kenya 1: June 11-22</p>\n<p>Honduras 1: June 15-22</p>\n<p>Northern Ireland RIOT 2: June 17-26</p>\n<p>Ecuador: June 22-29</p>\n<p>Dominican Republic 1: June 28-July 6</p>\n<p>Honduras 2: July 6-13</p>\n<p>Northern Ireland RIOT 3: July 8-17</p>\n<p>Kenya 2: July 9-20</p>\n<p>Dominican Republic 2: July 13-20</p>\n<p>Northern Ireland RIOT 4: July 19-28</p>\n<p>Poland: Late July 2024</p>\n",
              interest_url:
                "https://app.smartsheet.com/b/form/350fad5296e242a783031f762ae74fbc",
              interest_url_name: "Interested?",
            },
            {
              name: "Individuals",
              description: "",
              content:
                "<h2>2024 INDIVIDUAL DATES AND LOCATIONS</h2>\n<p>Northern Ireland RIOT 0: January 3-11</p>\n<p>Northern Ireland Salt Factory Sports: June 6-17</p>\n<p>Kenya 1: June 11-22</p>\n<p>Dominican Republic 1: June 28-July 6</p>\n<p>Kenya 2: July 9-20</p>\n<p>Poland: Late July 2024</p>\n",
              interest_url:
                "https://app.smartsheet.com/b/form/5d5fe730a44047ff9124b76f369a853d",
              interest_url_name: "Interested?",
            },
          ],
        },
        small_group_locations: {
          show: true,
          content: "",
        },
        move_intern_interest: {
          show: true,
          content:
            "<p>Some summer internships consist of making copies, getting coffee for the supervisors, and filing documents under fluorescent lights from 8-5. This is not one of those internships. At CIY, our Event Staff (or interns) are an important part of helping us accomplish our mission and as such, they play a critical role in our summer events. In the summer of 2023, the programs of MOVE and MIX hope to serve over 35,000 students and adult volunteers. We could not do what we do in each of these programs without the help of our Summer Event Staff.</p>\n<p>Our Event Staff are highly valued and deeply loved by our organization. If you’ve found your way to this page, you are probably thinking about applying for an Event Staff position with one of our summer programs, so below are a few important things to know.</p>\n",
          learn_more_url:
            "https://ciymarketing.s3.us-east-2.amazonaws.com/webresources/MOVE/Miscellaneous+/2024+Summer+Internship+Job+Descriptions.pdf",
          signup_url:
            "https://app.smartsheet.com/b/form/f89ba19cc6094ee0888e01269f173ff2",
        },
        mix_intern_interest: {
          show: false,
          content:
            "<p>Some summer internships consist of making copies, getting coffee for the supervisors, and filing documents under fluorescent lights from 8-5. This is not one of those internships. At CIY, our Event Staff (or interns) are an important part of helping us accomplish our mission and as such, they play a critical role in our summer events. In the summer of 2023, the programs of MOVE and MIX hope to serve over 35,000 students and adult volunteers. We could not do what we do in each of these programs without the help of our Summer Event Staff.</p>\n<p>Our Event Staff are highly valued and deeply loved by our organization. If you’ve found your way to this page, you are probably thinking about applying for an Event Staff position with one of our summer programs, so below are a few important things to know.</p>\n",
          learn_more_url: "https://ciy.com/move/internships",
          signup_url:
            "https://app.smartsheet.com/b/form/f89ba19cc6094ee0888e01269f173ff2",
        },
        kingdom_worker_crash_nomination: {
          show: false,
          content:
            "<p>The term “Kingdom Worker” is something that we at CIY are passionate about, and we hope every student who attends a week of MOVE will also become passionate about it. We believe that God has called every single person to use their gifts, talents, and spheres of influence to advance His Kingdom. Some of the best inspiration for Kingdom Work comes from stories of other students who have embraced Christ’s call on their lives in incredible ways and gone on to amazing acts of Kingdom Work.</p>\n<p>In 2023, we’ll be looking at what it means to live by faith in the Son of God who loved us and gave himself for us. When you think about submitting to God’s call (Gal 2:20), do you think of a student in your youth group? If so, we would love to share their story!</p>\n",
          url: "https://app.smartsheet.com/b/form/f7d6d3a714c04576a4cf4f62ae121c00",
        },
        college_partners: {
          show: true,
          description:
            "<p>Each year at Christ In Youth conferences, thousands of high school and junior high students accept Christ, rededicate their lives, and many make the decision to serve Christ vocationally. CIY is committed to helping these student leaders become the Kingdom Workers Christ has called them to be. That means helping them find the Christian colleges and universities that can help prepare and equip them.</p>\n",
          college: [
            {
              image: {
                ID: 745,
                id: 745,
                title: "4cfd4ecd0d501015e4d59d0f40e60bb7ed793e70-800x166",
                filename:
                  "4cfd4ecd0d501015e4d59d0f40e60bb7ed793e70-800x166-1.png",
                filesize: 53032,
                url: "http://ciy-companion.local/wp-content/uploads/2022/11/4cfd4ecd0d501015e4d59d0f40e60bb7ed793e70-800x166-1.png",
                link: "http://ciy-companion.local/?attachment_id=745",
                alt: "",
                author: "1",
                description: "",
                caption: "",
                name: "4cfd4ecd0d501015e4d59d0f40e60bb7ed793e70-800x166",
                status: "inherit",
                uploaded_to: 5,
                date: "2023-05-09 19:55:38",
                modified: "2023-05-09 19:55:38",
                menu_order: 0,
                mime_type: "image/png",
                type: "image",
                subtype: "png",
                icon: "http://ciy-companion.local/wp-includes/images/media/default.png",
                width: 800,
                height: 166,
                sizes: {
                  thumbnail:
                    "http://ciy-companion.local/wp-content/uploads/2022/11/4cfd4ecd0d501015e4d59d0f40e60bb7ed793e70-800x166-1-150x150.png",
                  "thumbnail-width": 150,
                  "thumbnail-height": 150,
                  medium:
                    "http://ciy-companion.local/wp-content/uploads/2022/11/4cfd4ecd0d501015e4d59d0f40e60bb7ed793e70-800x166-1-300x62.png",
                  "medium-width": 300,
                  "medium-height": 62,
                  medium_large:
                    "http://ciy-companion.local/wp-content/uploads/2022/11/4cfd4ecd0d501015e4d59d0f40e60bb7ed793e70-800x166-1-768x159.png",
                  "medium_large-width": 768,
                  "medium_large-height": 159,
                  large:
                    "http://ciy-companion.local/wp-content/uploads/2022/11/4cfd4ecd0d501015e4d59d0f40e60bb7ed793e70-800x166-1.png",
                  "large-width": 800,
                  "large-height": 166,
                  "1536x1536":
                    "http://ciy-companion.local/wp-content/uploads/2022/11/4cfd4ecd0d501015e4d59d0f40e60bb7ed793e70-800x166-1.png",
                  "1536x1536-width": 800,
                  "1536x1536-height": 166,
                  "2048x2048":
                    "http://ciy-companion.local/wp-content/uploads/2022/11/4cfd4ecd0d501015e4d59d0f40e60bb7ed793e70-800x166-1.png",
                  "2048x2048-width": 800,
                  "2048x2048-height": 166,
                },
              },
              name: "Hope International University",
              url: "https://www.hiu.edu",
            },
            {
              image: {
                ID: 753,
                id: 753,
                title: "Johnson-trasparent",
                filename: "Johnson-trasparent.png",
                filesize: 70015,
                url: "http://ciy-companion.local/wp-content/uploads/2022/11/Johnson-trasparent.png",
                link: "http://ciy-companion.local/?attachment_id=753",
                alt: "",
                author: "2",
                description: "",
                caption: "",
                name: "johnson-trasparent",
                status: "inherit",
                uploaded_to: 5,
                date: "2023-05-10 16:50:10",
                modified: "2023-05-10 16:50:10",
                menu_order: 0,
                mime_type: "image/png",
                type: "image",
                subtype: "png",
                icon: "http://ciy-companion.local/wp-includes/images/media/default.png",
                width: 3001,
                height: 986,
                sizes: {
                  thumbnail:
                    "http://ciy-companion.local/wp-content/uploads/2022/11/Johnson-trasparent.png",
                  "thumbnail-width": 150,
                  "thumbnail-height": 49,
                  medium:
                    "http://ciy-companion.local/wp-content/uploads/2022/11/Johnson-trasparent.png",
                  "medium-width": 300,
                  "medium-height": 99,
                  medium_large:
                    "http://ciy-companion.local/wp-content/uploads/2022/11/Johnson-trasparent.png",
                  "medium_large-width": 768,
                  "medium_large-height": 252,
                  large:
                    "http://ciy-companion.local/wp-content/uploads/2022/11/Johnson-trasparent.png",
                  "large-width": 1024,
                  "large-height": 336,
                  "1536x1536":
                    "http://ciy-companion.local/wp-content/uploads/2022/11/Johnson-trasparent.png",
                  "1536x1536-width": 1536,
                  "1536x1536-height": 505,
                  "2048x2048":
                    "http://ciy-companion.local/wp-content/uploads/2022/11/Johnson-trasparent.png",
                  "2048x2048-width": 2048,
                  "2048x2048-height": 673,
                },
              },
              name: "Johnson University",
              url: "https://johnsonu.edu",
            },
            {
              image: {
                ID: 767,
                id: 767,
                title: "KCU Knight and Name Stack (1)",
                filename: "KCU-Knight-and-Name-Stack-1.png",
                filesize: 334737,
                url: "http://ciy-companion.local/wp-content/uploads/2022/11/KCU-Knight-and-Name-Stack-1.png",
                link: "http://ciy-companion.local/?attachment_id=767",
                alt: "",
                author: "2",
                description: "",
                caption: "",
                name: "kcu-knight-and-name-stack-1",
                status: "inherit",
                uploaded_to: 5,
                date: "2023-05-17 19:40:50",
                modified: "2023-05-17 19:40:50",
                menu_order: 0,
                mime_type: "image/png",
                type: "image",
                subtype: "png",
                icon: "http://ciy-companion.local/wp-includes/images/media/default.png",
                width: 4517,
                height: 1819,
                sizes: {
                  thumbnail:
                    "http://ciy-companion.local/wp-content/uploads/2022/11/KCU-Knight-and-Name-Stack-1-150x150.png",
                  "thumbnail-width": 150,
                  "thumbnail-height": 150,
                  medium:
                    "http://ciy-companion.local/wp-content/uploads/2022/11/KCU-Knight-and-Name-Stack-1-300x121.png",
                  "medium-width": 300,
                  "medium-height": 121,
                  medium_large:
                    "http://ciy-companion.local/wp-content/uploads/2022/11/KCU-Knight-and-Name-Stack-1-768x309.png",
                  "medium_large-width": 768,
                  "medium_large-height": 309,
                  large:
                    "http://ciy-companion.local/wp-content/uploads/2022/11/KCU-Knight-and-Name-Stack-1-1024x412.png",
                  "large-width": 1024,
                  "large-height": 412,
                  "1536x1536":
                    "http://ciy-companion.local/wp-content/uploads/2022/11/KCU-Knight-and-Name-Stack-1-1536x619.png",
                  "1536x1536-width": 1536,
                  "1536x1536-height": 619,
                  "2048x2048":
                    "http://ciy-companion.local/wp-content/uploads/2022/11/KCU-Knight-and-Name-Stack-1-2048x825.png",
                  "2048x2048-width": 2048,
                  "2048x2048-height": 825,
                },
              },
              name: "Kentucky Christian University",
              url: "https://www.kcu.edu",
            },
            {
              image: {
                ID: 751,
                id: 751,
                title: "Ozark_navy_transparent",
                filename: "Ozark_navy_transparent-1.png",
                filesize: 18913,
                url: "http://ciy-companion.local/wp-content/uploads/2022/11/Ozark_navy_transparent-1.png",
                link: "http://ciy-companion.local/?attachment_id=751",
                alt: "",
                author: "2",
                description: "",
                caption: "",
                name: "ozark_navy_transparent",
                status: "inherit",
                uploaded_to: 5,
                date: "2023-05-10 16:39:08",
                modified: "2023-05-10 16:39:08",
                menu_order: 0,
                mime_type: "image/png",
                type: "image",
                subtype: "png",
                icon: "http://ciy-companion.local/wp-includes/images/media/default.png",
                width: 4116,
                height: 1195,
                sizes: {
                  thumbnail:
                    "http://ciy-companion.local/wp-content/uploads/2022/11/Ozark_navy_transparent-1-150x150.png",
                  "thumbnail-width": 150,
                  "thumbnail-height": 150,
                  medium:
                    "http://ciy-companion.local/wp-content/uploads/2022/11/Ozark_navy_transparent-1-300x87.png",
                  "medium-width": 300,
                  "medium-height": 87,
                  medium_large:
                    "http://ciy-companion.local/wp-content/uploads/2022/11/Ozark_navy_transparent-1-768x223.png",
                  "medium_large-width": 768,
                  "medium_large-height": 223,
                  large:
                    "http://ciy-companion.local/wp-content/uploads/2022/11/Ozark_navy_transparent-1-1024x297.png",
                  "large-width": 1024,
                  "large-height": 297,
                  "1536x1536":
                    "http://ciy-companion.local/wp-content/uploads/2022/11/Ozark_navy_transparent-1-1536x446.png",
                  "1536x1536-width": 1536,
                  "1536x1536-height": 446,
                  "2048x2048":
                    "http://ciy-companion.local/wp-content/uploads/2022/11/Ozark_navy_transparent-1-2048x595.png",
                  "2048x2048-width": 2048,
                  "2048x2048-height": 595,
                },
              },
              name: "Ozark Christian College",
              url: "https://occ.edu",
            },
            {
              image: {
                ID: 746,
                id: 746,
                title: "8bbc901a40f437bc9110f8fe9edfaa05332a3706-413x202",
                filename:
                  "8bbc901a40f437bc9110f8fe9edfaa05332a3706-413x202-1.png",
                filesize: 7676,
                url: "http://ciy-companion.local/wp-content/uploads/2022/11/8bbc901a40f437bc9110f8fe9edfaa05332a3706-413x202-1.png",
                link: "http://ciy-companion.local/?attachment_id=746",
                alt: "",
                author: "1",
                description: "",
                caption: "",
                name: "8bbc901a40f437bc9110f8fe9edfaa05332a3706-413x202",
                status: "inherit",
                uploaded_to: 5,
                date: "2023-05-09 19:56:00",
                modified: "2023-05-09 19:56:00",
                menu_order: 0,
                mime_type: "image/png",
                type: "image",
                subtype: "png",
                icon: "http://ciy-companion.local/wp-includes/images/media/default.png",
                width: 413,
                height: 202,
                sizes: {
                  thumbnail:
                    "http://ciy-companion.local/wp-content/uploads/2022/11/8bbc901a40f437bc9110f8fe9edfaa05332a3706-413x202-1-150x150.png",
                  "thumbnail-width": 150,
                  "thumbnail-height": 150,
                  medium:
                    "http://ciy-companion.local/wp-content/uploads/2022/11/8bbc901a40f437bc9110f8fe9edfaa05332a3706-413x202-1-300x147.png",
                  "medium-width": 300,
                  "medium-height": 147,
                  medium_large:
                    "http://ciy-companion.local/wp-content/uploads/2022/11/8bbc901a40f437bc9110f8fe9edfaa05332a3706-413x202-1.png",
                  "medium_large-width": 413,
                  "medium_large-height": 202,
                  large:
                    "http://ciy-companion.local/wp-content/uploads/2022/11/8bbc901a40f437bc9110f8fe9edfaa05332a3706-413x202-1.png",
                  "large-width": 413,
                  "large-height": 202,
                  "1536x1536":
                    "http://ciy-companion.local/wp-content/uploads/2022/11/8bbc901a40f437bc9110f8fe9edfaa05332a3706-413x202-1.png",
                  "1536x1536-width": 413,
                  "1536x1536-height": 202,
                  "2048x2048":
                    "http://ciy-companion.local/wp-content/uploads/2022/11/8bbc901a40f437bc9110f8fe9edfaa05332a3706-413x202-1.png",
                  "2048x2048-width": 413,
                  "2048x2048-height": 202,
                },
              },
              name: "Point University",
              url: "https://point.edu",
            },
          ],
        },
        convos_beta: {
          show: true,
          content:
            "<p>Keep Convos on your phone and keep the conversation going when you go home. Meaningful conversations are possible every time your small group gets together through the Convos Creator. You’ve used Convos all week and now you can build custom Convos every week. Convos Creator keeps your small group leaders from struggling with what to say next and keeps you from fighting with the office printer an hour before youth group. Convos lets you listen, lead, and talk to your students, not at them. All of this with your lessons, your branding, and your students at the center of every conversation.</p>\n<p>Great conversations aren’t just possible, they are necessary. Convos Creator makes them better.</p>\n",
          beta_url: "https://convos.ciy.com",
        },
        youth_ministry_resources: {
          show: true,
          url: "https://store.ciy.com/collections/high-school-resources",
        },
        session_4: {
          show: false,
          resource_url: "",
        },
        preteen_ministry_resources: {
          show: false,
          url: "https://store.ciy.com/collections/ssat",
        },
        connect: {
          show: true,
          service: {
            facebook: "https://www.facebook.com/CIYMOVE/",
            instagram: "https://www.instagram.com/ciymove/",
            tiktok: "https://www.tiktok.com/@christinyouth",
            podcast: "https://bte.buzzsprout.com/",
            spotify: "",
          },
        },
        decision: {
          show: true,
          first_time_decision: {
            show: true,
            content:
              '<h2><b>“I gave my life to Jesus this week!”</b></h2>\n<p>What?! Congratulations! You’ve just made the biggest and most important decision of your life. You may be thinking to yourself, “Where do I go from here now that everything has changed?”.  <span id="WEBEXT">First of all, go </span><b><span id="WEBEXT">talk </span></b><span id="WEBEXT">to your youth leader.</span> They can help you with some practical next steps. Second, <b>stay connected</b> to your youth group. You were not made to walk alone. You need your church family, and they need you. Third, <b>remember</b> that while everything <i>has </i>changed, not everything will <i>feel</i> different all the time. The valleys always feel different than the mountaintops, and that’s ok. God is just as present in those moments than He is the first moment you felt Him.</p>\n',
          },
          rededication: {
            show: true,
            content:
              "<h2><b>“I rededicated my life this week!”</b></h2>\n<p>The Biblical word for this awesome decision is “repentance” (I Peter 3.9). And it’s not the last time you’ll do it. In fact, it’s something that we should all do on a regular basis. Not because we’re just repeating the same things over and over, but because as we walk with Jesus the Holy Spirit will continue to give us new understandings of our behavior, and compelled us to change that behavior according to God’s perfect will (Hebrews 6.1). So don’t be ashamed! Instead, boldly rejoice about God’s kindness that loves you JUST as you are, but loves you way too much to leave you there!</p>\n",
          },
          vocational_ministry: {
            show: true,
            content:
              '<h2><b>“I decided to go into vocational ministry this week!”</b></h2>\n<p>That’s awesome! This is the beginning of a long, beautiful, challenging road. Click <a href="https://ciy.com/move/called"><strong>here</strong></a> for a free resource to guide you through the next few months of this amazing adventure!</p>\n',
          },
          kingdom_worker: {
            show: true,
            content:
              '<h2><b>“I dedicated my life to Kingdom Work this week!”</b></h2>\n<p>Praise the Lord! Long before your were born, God knew you. He knew the ways that He would gift you, the people He would surround you with, and the passions He would place in your heart. None of it was an accident (Jeremiah 1.5). He created you to make His name known in ways that you are uniquely gifted and positioned for. In fact, He prepared these things for you before you were ever born (Ephesians 2.10). <span id="WEBEXT">So go talk to your youth leader, talk to your small group, talk to your friends, and most importantly, TALK TO THE GOD WHO CREATED YOU, and ask Him how He wants to use you to advance His Kingdom right. now.</span></p>\n',
          },
        },
      },
      connect: {
        show: false,
        service: {
          facebook: "https://www.facebook.com/CIYMOVE/",
          instagram: "https://www.instagram.com/ciymove/",
          spotify:
            "https://open.spotify.com/user/christinyouth?si=053c7e66ff6a42d1",
          podcast: "https://bte.buzzsprout.com/",
          tiktok: "",
        },
      },
      convos: {
        show: true,
        apple_store_url:
          "https://apps.apple.com/us/app/ciy-convos/id1460839531",
        google_play_url:
          "https://play.google.com/store/apps/details?id=com.midwesterninteractive.convo&hl=en_US&gl=US",
        description:
          "<p><strong>CODE: move2023</strong></p>\n<p>Convos is an app that helps spark great conversations. It’s developed to draw people together through conversations – with games and videos and polls and open-ended questions that work perfectly for small groups who can look each other in the eye and dig deep into the kinds of conversations that come when people trust one another. As your group sits face-to-face, the Convos app helps facilitate conversations. Just pass the mobile device around to each person in the circle and follow along with the prompts to lead the next part of the conversation. Built on the idea that everyone wants to be liked, to feel safe, to be seen and heard, and ultimately to be known and loved – Convos is the app that teaches people that conversations are not lectures or debates, or arguments. In conversations, people care.</p>\n",
      },
      electives: {
        show: true,
        engage_elective: {
          show: true,
          content:
            "<p>CIY Engage leads trips all over the world helping people experience God and see what He’s doing in other countries. This week’s Engage elective will highlight what’s happening in Kenya since the filming of “Where the River Divides.” Come learn how you might go and see for yourself what Jesus is up to!</p>\n",
        },
        how_to_share_your_faith: {
          show: true,
          content:
            "<p>Telling someone about the good news of Jesus is one of the best ways to experience growth in your faith. If you’d like to learn some practical ways to talk about Christ with others, we’ll see you there!</p>\n",
        },
        next_level: {
          show: true,
          content:
            "<p>An elective for Graduated Seniors who want some help getting ready for what is next. Come every afternoon and engage with the morning speaker about how to help your faith survive after high school.</p>\n",
        },
        so_you_wanna_go_into_ministry: {
          show: true,
          content:
            "<p>If you feel God calling you to serve His church as your vocation, come find out more about what that might look like and get some help thinking through what your next steps might need to be.</p>\n",
        },
        top_3_elective: {
          show: true,
          content:
            "<p>What are the top 3 things a high school student should care about right now? Come to this elective and find out! Our morning speaker will be helping you think about important things in a Christlike way.</p>\n",
        },
        worship_101: {
          show: true,
          content:
            "<p>Join the Worship Leader and Band as they share a little about their heart for worship, talk shop and what worship is all about. They’ll also be sure and answer some of your questions about music and ministry.</p>\n",
        },
        the_alternative: {
          show: true,
          content:
            "<p>Deck yourself in Christmas attire and come show us what you got. This late-night talent show is one of our favorite MOVE traditions. Sign-ups are limited, so head to the Station to secure your spot!</p>\n",
        },
      },
      event_contact: {
        show: false,
        contact: false,
      },
      leader_resources: {
        show: true,
        program_write_up: {
          show: true,
          content:
            "<h2>Who&#8217;s in charge?</h2>\n<p>If I&#8217;m in charge of my own destiny, that&#8217;s really exciting. It&#8217;s also terrifying.</p>\n<p>&nbsp;</p>\n<h2>What if I mess it up? What if I choose the wrong path? What if I fail?</h2>\n<p>We all want to be in charge of our own lives, but what if real freedom is found when we put someone else in charge.</p>\n<p>&nbsp;</p>\n<h2>But who?</h2>\n<p>At MOVE 2023, high school students around the country will discover the incredible hope of giving up control. They will hear the hope-filled call of Jesus to follow him at all costs <strong>nevertheless</strong> allowing Him to truly live through them.</p>\n",
        },
        small_group_locations: {
          show: true,
          content: "",
        },
        worship_playlist: {
          show: false,
          content: "",
        },
        adult_leader_videos: {
          show: false,
          videos: false,
        },
        outer_realm_videos: {
          show: false,
          videos: false,
        },
        amp_up_dance: {
          show: false,
          url: "",
        },
        four_the_win_rules: {
          show: false,
          url: "https://player.vimeo.com/video/786066035",
        },
        photo_scavenger_hunt: {
          show: false,
          url: "",
        },
        damage_report: {
          show: true,
          url: "https://app.smartsheet.com/b/form/cc83311d52434f4d9024a23f18a44ebf",
        },
        event_eval: {
          show: true,
          url: "https://app.smartsheet.com/b/form/4be6d691649f406f975d8c074603280d",
        },
        youth_group_questions: {
          show: true,
          instructions:
            "<p>The following is a simple and totally optional guide to help you facilitate a Youth Group Time Discussion. The first thing for each day is just a recap from the day. After that will be the Discussion Starters. These are totally optional! Feel free to use all, some, or none of these!</p>\n",
          question_set: [
            {
              title: "Night 1",
              content:
                "<ul>\n<li>What did you imagine God placing in your hands at the end of the session?\n<ul>\n<li>Why do you think that is significant?</li>\n</ul>\n</li>\n<li>When you think back on the last 24 hours – what is the FIRST THING that comes to mind?</li>\n<li>Why is the theme for this week “NEVERTHELESS”?</li>\n</ul>\n",
            },
            {
              title: "Night 2",
              content:
                "<ul>\n<li>Which experience did you go to initially after the film?\n<ul>\n<li>Surrender – Mend – Forgive – Follow</li>\n<li>Why do you think God made that stand out to you?</li>\n<li>What is a practical step you could take toward Jesus?</li>\n</ul>\n</li>\n<li>What is something Jesus did today that you didn’t expect?</li>\n<li>How has Jesus shown that He is FOR or OVER you today?</li>\n</ul>\n",
            },
            {
              title: "Night 3",
              content:
                "<ul>\n<li>Jesus being in us changes how we THINK (this morning’s session) and how we LIVE (this evening’s session). Why are both important?</li>\n<li>What did you hear today that you really needed?</li>\n<li>Would anyone be willing to share about dropping the chain tonight?</li>\n</ul>\n",
            },
            {
              title: "Night 4",
              content:
                "<ul>\n<li>Why do you think eating together was so important to Jesus’ followers?</li>\n<li>What causes people to feel disconnected from our group? What can we do about it?</li>\n<li>How has Jesus being between us and connecting us made our group stronger?</li>\n<li>What should you do if you begin to feel disconnected from the community?</li>\n</ul>\n",
            },
            {
              title: "Night 5",
              content:
                "<ul>\n<li>What is one way Jesus could live through you when you get home?</li>\n<li>This week we’ve learned how Jesus is FOR, OVER, IN, BETWEEN, and THROUGH…which one was most helpful to you this week?</li>\n<li>What should change when you get back?</li>\n</ul>\n",
            },
          ],
        },
        event_contacts: {
          show: true,
          contact: [
            {
              image: false,
              name: "Ryan Lingbloom",
              role: "Director",
              email: "",
              phone_number: "",
            },
            {
              image: {
                ID: 695,
                id: 695,
                title: "sam_kiefer_square",
                filename: "sam_kiefer_square-scaled.jpeg",
                filesize: 978293,
                url: "http://ciy-companion.local/wp-content/uploads/2023/04/sam_kiefer_square-scaled.jpeg",
                link: "http://ciy-companion.local/event/mix23fl/sam_kiefer_square/",
                alt: "",
                author: "2",
                description: "",
                caption: "",
                name: "sam_kiefer_square",
                status: "inherit",
                uploaded_to: 544,
                date: "2023-05-09 14:09:23",
                modified: "2023-05-09 14:09:23",
                menu_order: 0,
                mime_type: "image/jpeg",
                type: "image",
                subtype: "jpeg",
                icon: "http://ciy-companion.local/wp-includes/images/media/default.png",
                width: 2560,
                height: 2560,
                sizes: {
                  thumbnail:
                    "http://ciy-companion.local/wp-content/uploads/2023/04/sam_kiefer_square-150x150.jpeg",
                  "thumbnail-width": 150,
                  "thumbnail-height": 150,
                  medium:
                    "http://ciy-companion.local/wp-content/uploads/2023/04/sam_kiefer_square-300x300.jpeg",
                  "medium-width": 300,
                  "medium-height": 300,
                  medium_large:
                    "http://ciy-companion.local/wp-content/uploads/2023/04/sam_kiefer_square-768x768.jpeg",
                  "medium_large-width": 768,
                  "medium_large-height": 768,
                  large:
                    "http://ciy-companion.local/wp-content/uploads/2023/04/sam_kiefer_square-1024x1024.jpeg",
                  "large-width": 1024,
                  "large-height": 1024,
                  "1536x1536":
                    "http://ciy-companion.local/wp-content/uploads/2023/04/sam_kiefer_square-1536x1536.jpeg",
                  "1536x1536-width": 1536,
                  "1536x1536-height": 1536,
                  "2048x2048":
                    "http://ciy-companion.local/wp-content/uploads/2023/04/sam_kiefer_square-2048x2048.jpeg",
                  "2048x2048-width": 2048,
                  "2048x2048-height": 2048,
                },
              },
              name: "Sam Kiefer",
              role: "Assistant Director",
              email: "",
              phone_number: "",
            },
            {
              image: {
                ID: 924,
                id: 924,
                title: "Staff_Photos_Square-202304-Brouwer",
                filename: "Staff_Photos_Square-202304-Brouwer-scaled.jpg",
                filesize: 1019175,
                url: "http://ciy-companion.local/wp-content/uploads/2023/06/Staff_Photos_Square-202304-Brouwer-scaled.jpg",
                link: "http://ciy-companion.local/event/mov23mo2/staff_photos_square-202304-brouwer/",
                alt: "",
                author: "2",
                description: "",
                caption: "",
                name: "staff_photos_square-202304-brouwer",
                status: "inherit",
                uploaded_to: 923,
                date: "2023-06-01 21:08:52",
                modified: "2023-06-01 21:08:52",
                menu_order: 0,
                mime_type: "image/jpeg",
                type: "image",
                subtype: "jpeg",
                icon: "http://ciy-companion.local/wp-includes/images/media/default.png",
                width: 2560,
                height: 2560,
                sizes: {
                  thumbnail:
                    "http://ciy-companion.local/wp-content/uploads/2023/06/Staff_Photos_Square-202304-Brouwer-150x150.jpg",
                  "thumbnail-width": 150,
                  "thumbnail-height": 150,
                  medium:
                    "http://ciy-companion.local/wp-content/uploads/2023/06/Staff_Photos_Square-202304-Brouwer-300x300.jpg",
                  "medium-width": 300,
                  "medium-height": 300,
                  medium_large:
                    "http://ciy-companion.local/wp-content/uploads/2023/06/Staff_Photos_Square-202304-Brouwer-768x768.jpg",
                  "medium_large-width": 768,
                  "medium_large-height": 768,
                  large:
                    "http://ciy-companion.local/wp-content/uploads/2023/06/Staff_Photos_Square-202304-Brouwer-1024x1024.jpg",
                  "large-width": 1024,
                  "large-height": 1024,
                  "1536x1536":
                    "http://ciy-companion.local/wp-content/uploads/2023/06/Staff_Photos_Square-202304-Brouwer-1536x1536.jpg",
                  "1536x1536-width": 1536,
                  "1536x1536-height": 1536,
                  "2048x2048":
                    "http://ciy-companion.local/wp-content/uploads/2023/06/Staff_Photos_Square-202304-Brouwer-2048x2048.jpg",
                  "2048x2048-width": 2048,
                  "2048x2048-height": 2048,
                },
              },
              name: "Elexa Brouwer",
              role: "Event Coordinator",
              email: "elexa.brouwer@ciy.com",
              phone_number: "",
            },
            {
              image: false,
              name: "Kevin Miles",
              role: "Campus Pastor",
              email: "",
              phone_number: "",
            },
            {
              image: {
                ID: 902,
                id: 902,
                title: "christian_garcia_Photos_Square-2023--9",
                filename: "christian_garcia_Photos_Square-2023-9-scaled.jpg",
                filesize: 596111,
                url: "http://ciy-companion.local/wp-content/uploads/2023/05/christian_garcia_Photos_Square-2023-9-scaled.jpg",
                link: "http://ciy-companion.local/event/mov23ne/christian_garcia_photos_square-2023-9/",
                alt: "",
                author: "2",
                description: "",
                caption: "",
                name: "christian_garcia_photos_square-2023-9",
                status: "inherit",
                uploaded_to: 790,
                date: "2023-06-01 19:48:43",
                modified: "2023-06-01 19:48:43",
                menu_order: 0,
                mime_type: "image/jpeg",
                type: "image",
                subtype: "jpeg",
                icon: "http://ciy-companion.local/wp-includes/images/media/default.png",
                width: 2560,
                height: 2560,
                sizes: {
                  thumbnail:
                    "http://ciy-companion.local/wp-content/uploads/2023/05/christian_garcia_Photos_Square-2023-9-scaled.jpg",
                  "thumbnail-width": 150,
                  "thumbnail-height": 150,
                  medium:
                    "http://ciy-companion.local/wp-content/uploads/2023/05/christian_garcia_Photos_Square-2023-9-300x300.jpg",
                  "medium-width": 300,
                  "medium-height": 300,
                  medium_large:
                    "http://ciy-companion.local/wp-content/uploads/2023/05/christian_garcia_Photos_Square-2023-9-scaled.jpg",
                  "medium_large-width": 768,
                  "medium_large-height": 768,
                  large:
                    "http://ciy-companion.local/wp-content/uploads/2023/05/christian_garcia_Photos_Square-2023-9-scaled.jpg",
                  "large-width": 1024,
                  "large-height": 1024,
                  "1536x1536":
                    "http://ciy-companion.local/wp-content/uploads/2023/05/christian_garcia_Photos_Square-2023-9-scaled.jpg",
                  "1536x1536-width": 1536,
                  "1536x1536-height": 1536,
                  "2048x2048":
                    "http://ciy-companion.local/wp-content/uploads/2023/05/christian_garcia_Photos_Square-2023-9-scaled.jpg",
                  "2048x2048-width": 2048,
                  "2048x2048-height": 2048,
                },
              },
              name: "Christian Garcia",
              role: "Hospitality Coordinator",
              email: "movestaff12@ciy.com",
              phone_number: "(417) 626-8520",
            },
            {
              image: {
                ID: 903,
                id: 903,
                title: "maddie_beckett_Photos_Square-2023--12",
                filename: "maddie_beckett_Photos_Square-2023-12.jpg",
                filesize: 2839959,
                url: "http://ciy-companion.local/wp-content/uploads/2023/05/maddie_beckett_Photos_Square-2023-12.jpg",
                link: "http://ciy-companion.local/event/mov23ne/maddie_beckett_photos_square-2023-12/",
                alt: "",
                author: "2",
                description: "",
                caption: "",
                name: "maddie_beckett_photos_square-2023-12",
                status: "inherit",
                uploaded_to: 790,
                date: "2023-06-01 19:49:34",
                modified: "2023-06-01 19:49:34",
                menu_order: 0,
                mime_type: "image/jpeg",
                type: "image",
                subtype: "jpeg",
                icon: "http://ciy-companion.local/wp-includes/images/media/default.png",
                width: 0,
                height: 0,
                sizes: {
                  thumbnail:
                    "http://ciy-companion.local/wp-content/uploads/2023/05/maddie_beckett_Photos_Square-2023-12.jpg",
                  "thumbnail-width": 1,
                  "thumbnail-height": 1,
                  medium:
                    "http://ciy-companion.local/wp-content/uploads/2023/05/maddie_beckett_Photos_Square-2023-12.jpg",
                  "medium-width": 1,
                  "medium-height": 1,
                  medium_large:
                    "http://ciy-companion.local/wp-content/uploads/2023/05/maddie_beckett_Photos_Square-2023-12.jpg",
                  "medium_large-width": 1,
                  "medium_large-height": 1,
                  large:
                    "http://ciy-companion.local/wp-content/uploads/2023/05/maddie_beckett_Photos_Square-2023-12.jpg",
                  "large-width": 1,
                  "large-height": 1,
                  "1536x1536":
                    "http://ciy-companion.local/wp-content/uploads/2023/05/maddie_beckett_Photos_Square-2023-12.jpg",
                  "1536x1536-width": 1,
                  "1536x1536-height": 1,
                  "2048x2048":
                    "http://ciy-companion.local/wp-content/uploads/2023/05/maddie_beckett_Photos_Square-2023-12.jpg",
                  "2048x2048-width": 1,
                  "2048x2048-height": 1,
                },
              },
              name: "Maddie Beckett",
              role: "Housing Specialist",
              email: "movestaff11@ciy.com",
              phone_number: "(417) 781-5193",
            },
          ],
        },
      },
      start_date: "07/17/2023",
      end_date: "07/21/2023",
      location: "University of Central Missouri",
      on_campus_activities: {
        show: false,
        content: "",
      },
      selah: {
        show: true,
        description: "",
        questions: [
          {
            title: "Day 2",
            content:
              "<h2>STOP</h2>\n<p>You’ve been given a very special thing: time. Time to stop whatever it is you’re doing in order to be with God. There’s literally nothing better for you to do right now. But it’s hard to even slow down, much less to stop! This isn’t school. Don’t rush. Don’t try to “get it done.” Slow down. Stop. Try starting with this:</p>\n<ul>\n<li>First, notice the thoughts playing through your head. What’s been on your mind?</li>\n<li>Second, notice your body. How does it feel? Hot, cold, uncomfortable, sick, relaxed?</li>\n<li>Third, notice your feelings. How do you feel this morning? Anxious, tired, excited, happy?</li>\n<li>Now — this is very important — imagine yourself taking those thoughts and feelings in your hands. Hold them in your fists tightly. You see a stream flowing past your feet. Now let them go. Release your grip, letting all those thoughts and feelings fall into the water and flow away from you. The only thing that matters right now is this time between you and God.</li>\n</ul>\n<h2>EXHALE</h2>\n<p>Next, breathe. Breathe in&#8230; and out&#8230; in&#8230; and out. God is as close to you right now as the breath in your lungs. Find peace in this thought. When you’re ready, pray this simple prayer a few times while still focusing on your breathing:</p>\n<ul>\n<li>As you inhale, pray, “Let me be still&#8230;”</li>\n<li>As you exhale, pray, “&#8230;and know that you are God.”</li>\n</ul>\n<h2>LOOK</h2>\n<p>Now let’s look at the word of God for you today. When God speaks, it’s important for us to pay attention. Read this story about Isaiah the prophet slowly and carefully. Don’t rush. Notice what words, phrases, or ideas jump out to you:</p>\n<p>&#8230;I saw the Lord. He was sitting on a lofty throne, and the train of his robe filled the Temple. Attending him were mighty seraphim, each having six wings. With two wings they covered their faces, with two they covered their feet, and with two they flew. They were calling out to each other, “Holy, holy, holy is the Lord of Heaven’s Armies! The whole earth is filled with his glory!” Their voices shook the Temple to its foundations, and the entire building was filled with smoke. Then I said, “It’s all over! I am doomed, for I am a sinful man. I have filthy lips, and I live among a people with filthy lips. Yet I have seen the King, the Lord of Heaven’s Armies.” (Isaiah 6:1-5, NLT)</p>\n<h2>ASK</h2>\n<p>What stuck out to you in the passage? Was it how holy and magnificent the Lord is? Was it a feeling of regret and guilt like Isaiah experienced? Was it the forgiveness that God gave to Isaiah? Something else? Whatever it is, turn it into a prayer, asking God to give you what you need. Perhaps pray, “Lord, show me how holy you really are, just like you showed Isaiah.” Or maybe your prayer is something like, “Lord, I feel so guilty and full of sin. Forgive me!”</p>\n<h2>HEAR</h2>\n<p>Now it’s time to listen to God. Once again, stop and breathe. Quiet your mind and heart. Now pray, “Speak Lord. Your servant is listening.” You are waiting to hear from the Holy Spirit. Don’t rush ahead. Wait. Don’t tell God what he’s saying. Listen. Based on the scripture you read today, is there anything God is asking you to do? Is there anything he’s inviting you to accept or let go of? If you need to, read the scripture again and see if God speaks from the passage. To finish your quiet time, come up with one thing you can do for God because of the word that you heard from him today and be ready to share it with your small group.</p>\n",
          },
          {
            title: "Day 3",
            content:
              "<h2>STOP</h2>\n<p>Stop everything and prepare your heart and mind to spend time with God. Once you are settled in and ready, follow these steps:</p>\n<ul>\n<li>Notice the thoughts running through your head. What’s been on your mind?</li>\n<li>Notice your body. How does it feel? Thirsty, sleepy, sore, comfortable?</li>\n<li>Notice your feelings. How do you feel? Nervous, distracted, joyful, frustrated?</li>\n<li>Now, hold them in your hands. Grip them tightly. And when you’re ready, open your hands and imagine it all blowing away in a breeze like dust. Right now, it’s time to be with God.</li>\n</ul>\n<h2>EXHALE</h2>\n<p>Start to notice your breath. Slow it down. Inhale&#8230;exhale&#8230;inhale&#8230;exhale. Remember that God is close to you, as close as the breath in your lungs. When you’re ready, pray this simple prayer a few times while continuing to focus on your breathing:</p>\n<ul>\n<li>As you inhale, pray, “The Lord is my shepherd&#8230;”</li>\n<li>As you exhale, pray, “&#8230;I have everything I need.”</li>\n</ul>\n<h2>LOOK</h2>\n<p>When God speaks, it’s important for us to pay attention. Read these words slowly and carefully. Read it a few times if necessary. Notice what sticks out to you:</p>\n<p>Don’t copy the behavior and customs of this world, but let God transform you into a new person by changing the way you think. Then you will learn to know God’s will for you, which is good and pleasing and perfect. (Romans 12:2 NLT)</p>\n<h2>ASK</h2>\n<p>What stuck out to you in the scripture? Did you have to admit that you sometimes copy the behavior of those around you? Did you like how the scripture says that God can change you into a new person? Did you wonder what it’s like to know, truly know, God’s will for you? Something else? Whatever it is, turn it into a prayer, asking God to give you what you need. You could pray something like, “Lord, I’m so sorry for acting just like the world around me. Forgive me!” Or maybe your prayer is something like, “God, teach my mind to know what your will is.” Or “God, I need to change but I don’t know how!”</p>\n<h2>HEAR</h2>\n<p>What is God saying to you? Once again, stop and breathe. Quiet your mind and heart. Now pray, “Speak Lord. Your servant is listening.” You are waiting to hear from the Holy Spirit. Based on the scripture you read today, is there anything God is asking you to do? Is there anything he’s inviting you to accept or let go of? Read the scripture again if you need to. You have time. To finish your quiet time, come up with one thing you can do for God because of the word that you heard from him today and be ready to share it with your small group.</p>\n",
          },
          {
            title: "Day 4",
            content:
              "<h2>STOP</h2>\n<p>Is it getting easier to stop? Or maybe your brain feels like it’s spinning so fast it might explode? Whatever you’re feeling, remember that there’s literally nothing better for you to do right now. So let’s do it:</p>\n<ul>\n<li>Notice the thoughts running through your head. What’s been on your mind?</li>\n<li>Notice your body. How does it feel? Hot, cold, sore, tired, hungry, relaxed?</li>\n<li>Notice your feelings. How do you feel? Worried, eager, confused, happy?</li>\n<li>Now, pretend like all those things are in the hot, humid air, buzzing around you, in your ears, landing on your neck. You’re sweating, but then you jump into the cool water of a swimming pool. It’s silent. Nothing can follow you here, except for the presence of God that never leaves you. It’s just you and God. God is the air you need here.</li>\n</ul>\n<h2>EXHALE</h2>\n<p>And now, just breathe&#8230;in and out&#8230;in and out. God is as close to you right now as the breath in your lungs. He’s here, ready to talk and listen. When you’re ready, pray this simple prayer a few times while still focusing on your breathing:</p>\n<ul>\n<li>As you inhale, pray, “Fill me, Holy Spirit&#8230;”</li>\n<li>As you exhale, pray, “&#8230;with your love.”</li>\n</ul>\n<h2>LOOK</h2>\n<p>Let’s look at the word of God for you today. What God has to say is the most important thing in the world. Read these words about Jesus’ love slowly and carefully. Read it a few times if you want. Notice what words, phrases, or ideas stick out to you:</p>\n<p>We know what real love is because Jesus gave up his life for us. So we also ought to give up our lives for our brothers and sisters. If someone has enough money to live well and sees a brother or sister in need but shows no compassion—how can God’s love be in that person? Dear children, let’s not merely say that we love each other; let us show the truth by our actions. (1 John 3:16-18 NLT)</p>\n<h2>ASK</h2>\n<p>What did you notice? Was there anything about love that surprised you? Did you notice how the scripture called Jesus’ love “real love”? Did you notice how the example of love isn’t about romantic love but about helping someone in need? Whatever it is, turn it into a prayer, asking God to give you what you need. Perhaps pray, “Lord, fill me with your real kind of love.” Or maybe your prayer is something like, “Lord, show me someone in need today so that I can help them.” Or “God, help me to understand your love.”</p>\n<h2>HEAR</h2>\n<p>Listen. God wants to say something to you. Breathe. Quiet your mind and heart. Now pray, “Speak Lord. Your servant is listening.” You are waiting to hear from the Holy Spirit. Based on the scripture you read today, is there anything God is asking you to do? Is there anything he’s inviting you to accept or let go of? Read the scripture again if you want. To finish your quiet time, come up with one thing you can do for God because of the word that you heard from him today and be ready to share it with your small group.</p>\n",
          },
          {
            title: "Day 5",
            content:
              "<h2>STOP</h2>\n<p>Can you believe what a gift it is to get to spend time with the creator of the whole universe? It’s good to be alive, sitting here right now. It’s so good that you get to be with God. There’s literally nothing better for you to do right now. So, make space, stop, and pay attention to what God has for you today:</p>\n<ul>\n<li>Notice the thoughts playing through your head. What’s been on your mind?</li>\n<li>Notice your body. How does it feel? Exhausted, energized, uncomfortable?</li>\n<li>Notice your feelings. How are you doing? Sad, loving, hurt, distant?</li>\n<li>Now, gather it all up in your arms. Feel the heaviness of them. Hug them tight around your chest. Then, let go of everything. Feel the weight released. Relax your muscles one by one. You’re light and unburdened. Ready to walk with God.</li>\n</ul>\n<h2>EXHALE</h2>\n<p>Let yourself exhale. Let it all out, every bit of breath. Now breathe in as deeply as you can. One more long, slow exhale. One of Jesus’ names is, “Immanuel,” which means, “God with us.” When you’re ready, pray this name of Jesus along with your breathing a few times:</p>\n<ul>\n<li>As you inhale, pray, “Immanuel&#8230;”</li>\n<li>As you exhale, pray, “&#8230;God with us.”</li>\n</ul>\n<h2>LOOK</h2>\n<p>Look at the word of God for you today. God is speaking, and it’s a joy to pay attention to him. Read these words slowly and carefully about the way Jesus lived his life. Notice what words, phrases, or ideas stick out to you:</p>\n<p>Imitate God, therefore, in everything you do, because you are his dear children. Live a life filled with love, following the example of Christ. He loved us and oered himself as a sacrifice for us, a pleasing aroma to God. (Ephesians 5:1-2 NLT)</p>\n<h2>ASK</h2>\n<p>What stuck out to you? Was it the way you are called God’s “dear child”? Was it the idea of living a life of sacrificial love? Did you feel nervous or afraid about living a life of self-sacrifice? Whatever it is, turn it into a prayer asking God to give you what you need. Perhaps pray, “Lord, help me realize just how much you really care for me.” Or maybe your prayer is something like, “Lord, give me a heart to love the way you loved.” Or “God, help me find joy in humble self-sacrifice.”</p>\n<h2>HEAR</h2>\n<p>Listen to God. Breathe. Quiet your mind and heart. Now pray, “Speak Lord. Your servant is listening.” You are waiting to hear from the Holy Spirit. Don’t rush this. Based on the scripture you read today, is there anything God is asking you to do? Is there anything he’s inviting you to accept or let go of? Read the scripture again if you need to, God may be speaking to you through it. To finish your quiet time, come up with one thing you can do for God because of the word that you heard from him today and be ready to share it with your small group.</p>\n",
          },
        ],
      },
      stage_contacts: {
        show: false,
        contact: false,
      },
      store: {
        show: true,
        "pick-up_url":
          "https://pickup.ciy.com/collections/mo2-july-17-21-warrensburg-mo",
        ship_url: "https://store.ciy.com/collections/move-2023",
      },
      tournament_rules: {
        show: true,
        basketball: {
          show: true,
          content:
            "<h2>MOVE 4V4 BASKETBALL TOURNAMENT RULES</h2>\n<ul>\n<li><strong>Tournament Start:</strong> All teams spread out evenly under each available basket.</li>\n<li><strong>Game Layout:</strong> Games are 4 on 4; if a team has more than 4 players, substitutions may occur ONLY between games (<em>No subs during games!</em>)</li>\n<li><strong>Game Start:</strong>\n<ul>\n<li>If a team won the previous game, they are on DEFENSE first.</li>\n<li>If neither team won the previous game, ROCK-PAPER-SCISSOR to determine who gets the ball first.</li>\n</ul>\n</li>\n<li><strong>Winning &amp; Losing:</strong>\n<ul>\n<li>The first team to score wins, staying on the court and being on defense first for the next game.</li>\n<li>The losing team goes to the next basket.</li>\n</ul>\n</li>\n<li><strong>Starting and Restarting Play:</strong>\n<ul>\n<li>Ball check at the top of the key to start the game and must be passed in.</li>\n<li>The ball is checked up after out-of-bounds or fouls.</li>\n</ul>\n</li>\n<li><strong>Infractions: </strong>The offense calls fouls; 2 fouls in one game results in a forfeit.</li>\n<li><strong>Possession Change:</strong> The ball must be brought past the 3-point line at the change of possession.</li>\n<li><strong>Game Lengths:</strong> If neither team scores after both teams have had 2 possessions, both teams lose and two new teams come on; ROCK-PAPER-SCISSOR to see who gets the ball.</li>\n<li><strong>Tourney Cards:</strong> Each time a team wins a game, the Basketball Official will punch 1 hole in their Tourney Card.</li>\n<li><strong>Time Limits:</strong> The tournament will run for 30 minutes with all teams acquiring as many punches as possible.</li>\n<li><strong>Advancing:</strong> After 30 minutes, the 4 teams with the most punches will advance to the Final 4 (Team with the most is 1<sup>st</sup> seed, second is 2<sup>nd</sup> seed, and so on through 4).</li>\n<li><strong>Tie-Breaker:</strong> If teams are tied, or multiple teams are eligible for the Final 4, one member from each team will compete in a shoot-off to determine who is in.</li>\n<li><strong>Free Throw Shoot-Off:</strong> Eligible teams get a chance to shoot each round; make the shot to advance, and keep shooting until the final 4 is determined.</li>\n<li><strong>Final 4:</strong>\n<ul>\n<li>The higher seed has the ball first.</li>\n<li>No possession limits.</li>\n<li>The offense calls fouls; 3 fouls in one game result in a forfeit.</li>\n<li>All baskets are worth 1 point.</li>\n<li>Semifinal games are 1 vs 4 &amp; 2 vs 3; Semifinal games are to 3 points</li>\n<li>The championship game is between the semifinal winners and is to 5 points.</li>\n</ul>\n</li>\n<li>Appropriate clothing is required (shirts, pants/shorts, <em>and</em> shoes), with costumes and team outfits being very strongly encouraged!</li>\n</ul>\n",
        },
        dodgeball: {
          show: true,
          content:
            "<h2>MOVE DODGEBALL TOURNAMENT RULES</h2>\n<ul>\n<li>This is a <strong><em>Single-Elimination Tournament</em></strong>, meaning the last team standing wins.</li>\n<li><strong>Team Size &amp; Subs:</strong> 6 people per team; sub only between games, not during.</li>\n<li>Court officials’ determinations are FINAL. Arguing with court officials results in the elimination of a team.</li>\n<li>No more than <strong>*<u>1 adult leader</u>*</strong> per team.</li>\n<li><strong>Game Setup:</strong> Dodgeballs are placed on the center line of the court to begin the match.</li>\n<li>Court officials will yell “dodgeball” to begin the match.</li>\n<li><strong>Game Start:</strong> To begin throwing, you must take any ball from the center line back to the start line BEFORE you can move forward and throw a ball at someone</li>\n<li><strong>Hits:</strong> If you get hit ANYWHERE – <u>including your face</u> – YOU ARE OUT!</li>\n<li><strong>Out of Bounds:</strong> You may leave the court ONLY to retrieve a ball; stepping out of bounds to dodge or over the center line to throw or grab a ball means you are OUT!</li>\n<li><strong>Catching &amp; Deflecting:</strong>\n<ul>\n<li>If a ball is thrown at you and it bounces off a ball you are holding and someone then catches that ball – NO ONE IS OUT.</li>\n<li>You + a ball catch = ball-thrower is OUT <u>AND</u> ONE member from your team may re-enter the game</li>\n<li>If a thrown ball knocks the ball you are holding to the ground, YOU ARE OUT!</li>\n</ul>\n</li>\n<li>Screaming, whooping, and hollering fans are required</li>\n<li>Appropriate clothing is required (shirts, pants/shorts, <em>and</em> shoes), with costumes and team outfits being very strongly encouraged!</li>\n</ul>\n",
        },
        volleyball: {
          show: true,
          content:
            "<h2>MOVE VOLLEYBALL TOURNAMENT RULES:</h2>\n<ul>\n<li><strong>Setup:</strong>\n<ul>\n<li>All teams divide up evenly at each available court.</li>\n<li>Teams will form a line behind the tournament official at each court.</li>\n</ul>\n</li>\n<li><strong>Team Size &amp; Subs:</strong> Teams consist of 4-6 players for each team, with no more than 6 players on the court during a game; substitutions may occur ONLY between games.</li>\n<li><strong>Scoring:</strong> All games are rally scoring, the first team to score wins; the losing team goes to the back of the line at the next court, and the winning team stays to play again.</li>\n<li><strong>First Possession:</strong> For the first game at each court, teams will play ROCK-PAPER-SCISSOR to determine who serves; after the first game, the winning team receives the serve.</li>\n<li><em>**No double-hits or lifts will be called**</em></li>\n<li><strong>Tourney Cards:</strong> Each time a team wins a game, the court official will punch 1 hole in their tourney card.</li>\n<li><strong>Time Limits:</strong> The tournament will run for 30 minutes with all teams acquiring as many punches as possible.\n<ul>\n<li>After 30 minutes, the 4 teams with the most punches will advance to the final 4.</li>\n<li>The team with the most is 1<sup>st</sup> seed, the second is 2<sup>nd</sup> seed, and so on through 4</li>\n<li><strong>Tie-Breaker:</strong> If teams are tied, or multiple teams are eligible for the final 4, one member from each team will compete in a serve-off to determine who is in.\n<ul>\n<li><strong>Serve-Off:</strong> The court official will place a target on one side of the court; eligible teams choose 1 server to try and hit the target, with the closest servers’ teams advancing to the final 4.</li>\n</ul>\n</li>\n</ul>\n</li>\n<li><strong>Final 4:</strong>\n<ul>\n<li>Semifinal games are 1 vs 4 &amp; 2 vs 3; Semifinal games are to 3 points, and the higher seed chooses to serve first or receive.</li>\n<li>Teams may substitute <u>ONE</u> time in semifinal games.</li>\n<li>The championship game is between semifinal winners and is to 5 points; the higher seed has the choice to serve first or receive.</li>\n<li>Teams may substitute <u>TWO</u> times in Championship Game</li>\n</ul>\n</li>\n<li>Appropriate clothing is required (shirts, pants/shorts <em>and</em> shoes), with costumes and team outfits being very strongly encouraged!</li>\n</ul>\n",
        },
        ultimate_frisbee: {
          show: true,
          content:
            "<h2>MOVE 7V7 ULTIMATE FRISBEE TOURNAMENT</h2>\n<ul>\n<li><strong>The Field:</strong> ~70 X 40yd field with an endzone at each end\n<ul>\n<li>Multiple fields can be created if needed</li>\n</ul>\n</li>\n<li><strong>Setup &amp; Start:</strong>\n<ul>\n<li>Each point begins with both teams lining up in front of their respective endzone line.</li>\n<li>The defense throws (“pulls”) the disc to the offense.</li>\n<li>A regulation game has seven players per team.</li>\n<li>The initial determination of defense/offense is decided by coin/disc flip.</li>\n</ul>\n</li>\n<li><strong>Scoring:</strong> Each time the offense completes a pass in the defense’s endzone, the offense scores a point; play is reinitiated by the scoring team staying and the opposing team moving to the other endzone, and the scoring team “pulling” the disc to their opponents.</li>\n<li><strong>Game Flow:</strong>\n<ul>\n<li>Games are 5 minutes long, or to 3 points – whichever comes first.</li>\n<li>The team with more points at the end of 5 minutes is the winner, and the winning team plays the next game starting off on DEFENSE.</li>\n<li>The losing team gets back in line to play again</li>\n<li>If teams are tied after 5 minutes, BOTH teams are off and 2 new teams are on</li>\n</ul>\n</li>\n<li><strong>Movement of the Disc:</strong> The disc may be advanced in any direction by completing a pass to a teammate.\n<ul>\n<li>Players may not run with the disc, getting only two full steps apart from stabilizing from a catch; players can then only pivot on one foot.</li>\n<li>The person with the disc has ten seconds to throw the disc, and the defender guarding the thrower can count out the stall timer.</li>\n</ul>\n</li>\n<li><strong>Change of Possession:</strong> When a pass is not completed the defense immediately takes possession of the disc and becomes the offense.</li>\n<li><strong>Substitutions:</strong> Players not in the game may replace players in the game after a score.</li>\n<li><strong>Non-contact:</strong> No physical contact is allowed between players; picks and screens are also prohibited.</li>\n<li><strong>Fouls: </strong>When a player initiates contact with another player a foul occurs; if a foul disrupts possession, the play resumes as if the possession was retained.\n<ul>\n<li>If the player committing the foul disagrees with the foul call, the play is redone</li>\n</ul>\n</li>\n<li><strong>Self-Refereeing:</strong> Players are responsible for their own foul and line calls, and players resolve their own disputes.</li>\n<li><strong>Tourney Cards:</strong> Each team will receive a tourney card at the beginning of the tournament; for the first 30 minutes of the tournament, all teams will acquire as many punches on their card as possible.\n<ul>\n<li>Field official will punch 2 holes for each WIN, and 1 hole for each TIE.</li>\n</ul>\n</li>\n<li><strong>Time Limits:</strong> The tournament will run for 30 minutes with all teams acquiring as many punches as possible; the 2 teams with the most punches will play in the championship game.</li>\n<li><strong>Tiebreaker:</strong> If more than 2 teams are eligible for the championship game due to a tie in punches, the teams that are tied will compete in a throw-off.\n<ul>\n<li><strong>Throw-Off:</strong>\n<ul>\n<li>A field official will place a target out in the field.</li>\n<li>1 Thrower from each tied team will throw toward the target; the closest throw advances to the championship.</li>\n</ul>\n</li>\n</ul>\n</li>\n<li><strong>Tournament Championship:</strong>\n<ul>\n<li>The game is to 5 points</li>\n<li>No time limit</li>\n<li>The team with the most punches receives the disc first.\n<ul>\n<li>If teams have an equal number, disc flip to determine possession.</li>\n</ul>\n</li>\n</ul>\n</li>\n<li>Appropriate clothing is required (shirts, pants/shorts <em>and</em> shoes), with costumes and team outfits being very strongly encouraged!</li>\n</ul>\n",
        },
        soccer: {
          show: true,
          content:
            '<h2>MOVE 4V4 SOCCER TOURNAMENT RULES</h2>\n<ul>\n<li><strong>The Field:</strong> 25-35yds X 15-25yds, with a 4’ goal at each end; Multiple fields can be created if needed.</li>\n<li><strong>Starting Possession:</strong> ROCK-PAPER-SCISSORS or coin toss to determine possession.</li>\n<li><strong>Scoring:</strong> Teams score when the ball goes into the opposing team’s goal; the ball must FULLY cross the goal line to be counted as a score.</li>\n<li><strong>Game Movement:</strong>\n<ul>\n<li>Games are 5 minutes long or 3 goals, whichever comes first.</li>\n<li>The team with more goals at the end of 5 minutes is the winner.</li>\n<li>The winning team stays and the incoming team starts with possession.</li>\n<li>The losing team gets back in line to play again.</li>\n<li>If teams are tied after 5 minutes, BOTH teams are off and 2 new teams are on.</li>\n<li>Two new teams will ROCK-PAPER-SCISSORS between opposing players to determine who gets the ball first.</li>\n</ul>\n</li>\n<li><strong>Infractions</strong>\n<ul>\n<li><strong>Goal-Tending:</strong> Teams may not guard their own goal by standing in front of it, or “goal-hanging” around it during play.\n<ul>\n<li>Opposing teams can count out loud to 3 to warn teams of goaltending.</li>\n<li>Field officials may rule a team disqualified if goal tending/hanging is egregious.</li>\n</ul>\n</li>\n<li><strong>Non-contact:</strong> No physical contact is allowed between players, with picks or screens also being prohibited.\n<ul>\n<li>A foul occurs when contact is made</li>\n</ul>\n</li>\n<li><strong>Fouls: </strong>When a player initiates contact with another player a foul occurs.\n<ul>\n<li>When a foul disrupts possession, the play resumes as if the possession was retained.</li>\n<li>If the player committing the foul disagrees with the foul call, the play is redone.</li>\n</ul>\n</li>\n<li><em>THERE ARE NO OFFSIDES!</em></li>\n</ul>\n</li>\n<li><strong>Substitutions:</strong> Players not in the game may replace players in the game after a score.\n<ul>\n<li>~5 seconds to get off the field</li>\n</ul>\n</li>\n<li><strong>Self-Refereeing:</strong> Players are responsible for their own foul and out-of-bounds calls.\n<ul>\n<li>Players resolve their own disputes.</li>\n</ul>\n</li>\n<li><strong>Tourney Cards:</strong> Each team will receive a tourney card at the beginning of the tournament; for the first 30 minutes of the tournament, all teams will acquire as many punches on their card as possible.\n<ul>\n<li>Field official will punch 2 holes for each WIN, and 1 hole for each TIE.</li>\n</ul>\n</li>\n<li><strong>Time Limits:</strong> The tournament will run for 30 minutes with all teams acquiring as many punches as possible; the 2 teams with the most punches will play in the championship game.</li>\n<li><strong>Tie-Breaker:</strong> If more than 2 teams are eligible for the championship game due to a tie in punches, the teams that are tied will compete in a shoot-out.\n<ul>\n<li><strong>Shoot-Out:</strong> Teams will select one player to take a shot from mid-field. Each team gets a shot, and teams that make the shot continue until the 2 championship game teams have been determined.</li>\n</ul>\n</li>\n<li><strong>Tournament Championship:</strong>\n<ul>\n<li>The game is to 5 goals.</li>\n<li>10 Minute time limit; highest score, or shootout if still a tie.\n<ul>\n<li>2 shooters from each team, then first to miss out of 1v1 shootouts.</li>\n</ul>\n</li>\n<li>The team with the most punches receives the ball first.\n<ul>\n<li>If teams have an equal number, ROCK-PAPER-SCISSORS to determine possession.</li>\n</ul>\n</li>\n</ul>\n</li>\n<li>Appropriate clothing is required (shirts, pants/shorts, <em>and</em> shoes), with costumes and team outfits being very strongly encouraged!</li>\n</ul>\n<ul>\n<li style="list-style-type: none;"></li>\n</ul>\n',
        },
        super_smash_bros: {
          show: true,
          content:
            '<h2>MOVE SUPER SMASH BROS TOURNAMENT RULES</h2>\n<ul>\n<li>This is a single-elimination tournament, meaning if you lose a single match (not life), you are out of the tournament.</li>\n<li><strong>General Rules:</strong>\n<ul>\n<li>3 Stock/5 minutes (First out, or most KOs by time end).</li>\n<li>Must use the game settings preset “MOVE S.S.B. Tourney”.</li>\n<li>This includes preselected stages, no smash meters, no spirits, no stage hazards, or other game-changing elements.</li>\n<li>Settings are set to retain a straight-up character-on-character brawl.</li>\n<li>4 player free for all match.\n<ul>\n<li>No teaming, judged by an official representative.</li>\n</ul>\n</li>\n</ul>\n</li>\n<li>If the game/console is cut-off by outside causes (power goes out, someone unplugs tv, console/game crashes, etc.), the game will be restarted if there is no fault of the players, or if caused by a player the offender will forfeit the match.</li>\n<li style="list-style-type: none;">\n<ul>\n<li>The cause/fault will be determined by the official representative</li>\n</ul>\n</li>\n<li>Appropriate clothing is required (shirts, pants/shorts, <em>and</em> shoes), with costumes and team outfits being very strongly encouraged!</li>\n</ul>\n',
        },
        kajabi: {
          show: false,
          content: "",
        },
      },
      where_the_river_divides: {
        show: true,
        url: "https://films.ciy.com",
        prayers: [
          {
            name: "Forgive",
            content:
              "<h2><strong>FORGIVE – PSALM 28</strong></h2>\n<p>Heavenly Father, I lift up (name) to you, as she/he is seeking to forgive.</p>\n<p>Please help her/him to release any bitterness,  and not to become trapped in unforgiveness.</p>\n<p>Do not let her/him become like those who refuse to forgive, who hold grudges and seek revenge, who speak peace with their mouths while resentment festers in their hearts.</p>\n<p>Help her/him to live according to your love, and not according to the hurt she/he has received.</p>\n<p>Help her/him to extend the mercy you have shown her/him.</p>\n<p>Lord, be her/his strength and her/his shield; in you may her/his heart trust, and be helped; may her/his heart be filled with gratitude, and with her/his voice may she/he give thanks to you.</p>\n<p>Help her/him to forgive, and to bless others with your love and grace; be her/his shepherd as she/he navigates this journey of forgiveness, and carry her/him through to the other side. Amen.</p>\n",
          },
          {
            name: "Mend",
            content:
              "<h2>MEND – PSALM 51</h2>\n<p>Heavenly Father, please have mercy on (name), according to your steadfast love; according to your abundant mercy.</p>\n<p>Help her/him to acknowledge the mistakes she/he’s made.</p>\n<p>Wash away all the hurt she/he’s caused and cleanse her/him from her/his wrongdoing.</p>\n<p>Guide her/him to take responsibility for her/his actions.</p>\n<p>Help her/him to seek forgiveness, and to make things right with those she/he has hurt.</p>\n<p>Help her/him to take the necessary steps to repair the damage, to listen and respond with empathy and compassion, and to do so with a humble and contrite heart.</p>\n<p>Create in her/him a heart of compassion, and renew a steadfast spirit within her/him.</p>\n<p>Help her/him to find joy and hope in the process of reconciliation, and grant her/him a willing spirit to do what it takes to make things right.</p>\n<p>May your delight be in the renewed love of this relationship, and may it be a testimony of your grace and power. Amen.</p>\n",
          },
          {
            name: "Surrender",
            content:
              "<h2>SURRENDER – PSALM 37</h2>\n<p>Heavenly Father, I pray for (name) who has something to surrender so they may pursue your will.</p>\n<p>Please help her/him to trust in you, and not be swayed by her/his own desires or the ways of the world.</p>\n<p>Please teach her/him to wait patiently for you, and to find delight in your ways.</p>\n<p>Give her/him the courage to let go of her/his own plans, and to submit to your divine purpose for her/his life.</p>\n<p>Help her/him to be still before you, and to wait patiently for your direction.</p>\n<p>Teach her/him to trust that you will provide everything she/he needs, as she/he surrenders her/his will to yours.</p>\n<p>Let her/he find joy in your ways, and may her/his heart be filled with gratitude and praise.</p>\n<p>Help her/him to trust in your unfailing love, and to find comfort in your faithfulness.</p>\n<p>May her/his soul be refreshed as she surrenders her will to yours, and may she find rest in your arms. Amen.</p>\n",
          },
          {
            name: "Yield",
            content:
              "<h2>YIELD – PSALM 25</h2>\n<p>Lord, I lift up (name) to You, who is considering whether to surrender their life to You and live under Your authority.</p>\n<p>I pray that You would guide them and give them wisdom, so that they may know Your will for their life.</p>\n<p>Lord help them to trust in You.</p>\n<p>Teach them Your ways, Lord, and lead them in Your truth.</p>\n<p>Help them to see that You are the God of their salvation and that all they need can be found in You.</p>\n<p>Lord, instruct them in the way they should choose.</p>\n<p>Lead them in the paths of righteousness, so that they may find well-being and peace in You.</p>\n<p>Help them to find the friendship that comes from knowing You.</p>\n<p>May they find true freedom and purpose in surrendering their life to You and living under Your authority. Amen.</p>\n",
          },
        ],
        small_group_discussion_content:
          "<p>After your group answers the first question on the screen in main session, you will have the chance to go on a prayer walk. Group discussion questions will be provided on banners. If your small group has trouble seeing the banners, the questions are also listed below.</p>\n<p>2.What does where the river divides say about who God is?</p>\n<p>3. How did where the river divides portray the idea that God is over us?</p>\n<p>4. Which character I’m where the river divide did you connect most with and why?</p>\n",
        share_your_story_url: "",
        soundtrack_url: "",
        rate_and_review_url: "",
      },
      schedule: {
        show: true,
        schedule: [
          {
            event: [
              {
                type: "check",
                name: "Check-In Begins",
                start_time: "1:00 pm",
                location: "Hosey (Lower Level)",
                colors: false,
              },
              {
                type: "check",
                name: "Check-In Ends",
                start_time: "4:00 pm",
                location: "Hosey (Lower Level)",
                colors: false,
              },
              {
                type: "fork",
                name: "Dinner - Open Seating",
                start_time: "5:00 pm",
                location: "Todd Dining Hall",
                colors: false,
              },
              {
                type: "paper",
                name: "Adult Leader Meeting",
                start_time: "6:00 pm",
                location: "Chapel",
                colors: false,
              },
              {
                type: "main_program",
                name: "Student Only Session",
                start_time: "6:15 pm",
                location: "Multipurpose Building",
                colors: false,
              },
              {
                type: "kingdom_worker",
                name: "Intermission",
                start_time: "7:15 pm",
                location: "Multipurpose Building",
                colors: false,
              },
              {
                type: "main_program",
                name: "Evening Session",
                start_time: "7:30 pm",
                location: "Multipurpose Building",
                colors: false,
              },
              {
                type: "youth_group_time",
                name: "Youth Group Time",
                start_time: "9:00 pm",
                location: "",
                colors: false,
              },
              {
                type: "bed",
                name: "In Dorms",
                start_time: "11:30 pm",
                location: "",
                colors: false,
              },
            ],
          },
          {
            event: [
              {
                type: "kingdom_worker",
                name: "Spiritual Formation Society",
                start_time: "7:00 am",
                location: "",
                colors: false,
              },
              {
                type: "fork",
                name: "Breakfast",
                start_time: "7:30 am",
                location: "Todd Dining Hall",
                colors: [575],
              },
              {
                type: "fork",
                name: "Breakfast",
                start_time: "7:50 am",
                location: "Todd Dining Hall",
                colors: [187],
              },
              {
                type: "fork",
                name: "Breakfast",
                start_time: "8:10 am",
                location: "Todd Dining Hall",
                colors: [185],
              },
              {
                type: "fork",
                name: "Breakfast",
                start_time: "8:30 am",
                location: "Todd Dining Hall",
                colors: [183],
              },
              {
                type: "paper",
                name: "Adult Leader Meeting",
                start_time: "8:30 am",
                location: "Chapel",
                colors: false,
              },
              {
                type: "main_program",
                name: "Morning Session",
                start_time: "9:00 am",
                location: "Multipurpose Building",
                colors: false,
              },
              {
                type: "selah",
                name: "SELAH",
                start_time: "10:30 am",
                location: "",
                colors: false,
              },
              {
                type: "youth_group_time",
                name: "Convos - Small Group Time",
                start_time: "10:45 am",
                location: "",
                colors: false,
              },
              {
                type: "fork",
                name: "Lunch",
                start_time: "11:30 am",
                location: "Todd Dining Hall",
                colors: [575],
              },
              {
                type: "fork",
                name: "Lunch",
                start_time: "11:50 am",
                location: "Todd Dining Hall",
                colors: [187],
              },
              {
                type: "fork",
                name: "Lunch",
                start_time: "12:10 pm",
                location: "Todd Dining Hall",
                colors: [185],
              },
              {
                type: "fork",
                name: "Lunch",
                start_time: "12:30 pm",
                location: "Todd Dining Hall",
                colors: [183],
              },
              {
                type: "kingdom_worker",
                name: "Next Level (Graduated Seniors Only)",
                start_time: "1:00 pm",
                location: "",
                colors: false,
              },
              {
                type: "kingdom_worker",
                name: "Top 3 Elective",
                start_time: "2:00 pm",
                location: "",
                colors: false,
              },
              {
                type: "kingdom_worker",
                name: "Worship 101 Elective",
                start_time: "2:00 pm",
                location: "",
                colors: false,
              },
              {
                type: "kingdom_worker",
                name: "Basketball Tournament",
                start_time: "3:00 pm",
                location: "Lovinger Gym",
                colors: false,
              },
              {
                type: "kingdom_worker",
                name: "Soccer Tournament",
                start_time: "3:00 pm",
                location: "",
                colors: false,
              },
              {
                type: "kingdom_worker",
                name: "How to Share Your Faith Elective",
                start_time: "3:30 pm",
                location: "",
                colors: false,
              },
              {
                type: "kingdom_worker",
                name: "Super Smash Bros Tournament",
                start_time: "4:00 pm",
                location: "",
                colors: false,
              },
              {
                type: "fork",
                name: "Dinner",
                start_time: "5:00 pm",
                location: "Todd Dining Hall",
                colors: [575],
              },
              {
                type: "fork",
                name: "Dinner",
                start_time: "5:20 pm",
                location: "Todd Dining Hall",
                colors: [187],
              },
              {
                type: "fork",
                name: "Dinner",
                start_time: "5:40 pm",
                location: "Todd Dining Hall",
                colors: [185],
              },
              {
                type: "fork",
                name: "Dinner",
                start_time: "6:00 pm",
                location: "Todd Dining Hall",
                colors: [183],
              },
              {
                type: "kingdom_worker",
                name: "Evening Prayers",
                start_time: "6:15 pm",
                location: "",
                colors: false,
              },
              {
                type: "kingdom_worker",
                name: "Cardboard Wars - Chariots",
                start_time: "6:45 pm",
                location: "",
                colors: false,
              },
              {
                type: "main_program",
                name: "Stage B",
                start_time: "7:15 pm",
                location: "Multipurpose Building",
                colors: false,
              },
              {
                type: "main_program",
                name: "Evening Session",
                start_time: "7:30 pm",
                location: "Multipurpose Building",
                colors: false,
              },
              {
                type: "main_program",
                name: "Outdoor Experience",
                start_time: "8:00 pm",
                location: "",
                colors: false,
              },
              {
                type: "youth_group_time",
                name: "Youth Group Time",
                start_time: "9:15 pm",
                location: "",
                colors: false,
              },
              {
                type: "kingdom_worker",
                name: "Dance Party",
                start_time: "10:45 pm",
                location: "",
                colors: false,
              },
              {
                type: "bed",
                name: "In Dorms",
                start_time: "11:30 pm",
                location: "",
                colors: false,
              },
            ],
          },
          {
            event: [
              {
                type: "kingdom_worker",
                name: "Spiritual Formation Society",
                start_time: "7:00 am",
                location: "",
                colors: false,
              },
              {
                type: "fork",
                name: "Breakfast",
                start_time: "7:30 am",
                location: "Todd Dining Hall",
                colors: [183],
              },
              {
                type: "fork",
                name: "Breakfast",
                start_time: "7:50 am",
                location: "Todd Dining Hall",
                colors: [575],
              },
              {
                type: "fork",
                name: "Breakfast",
                start_time: "8:10 am",
                location: "Todd Dining Hall",
                colors: [187],
              },
              {
                type: "fork",
                name: "Breakfast",
                start_time: "8:30 am",
                location: "Todd Dining Hall",
                colors: [185],
              },
              {
                type: "paper",
                name: "Adult Leader Meeting",
                start_time: "8:30 am",
                location: "Chapel",
                colors: false,
              },
              {
                type: "main_program",
                name: "Morning Session",
                start_time: "9:00 am",
                location: "Multipurpose Building",
                colors: false,
              },
              {
                type: "selah",
                name: "SELAH",
                start_time: "10:30 am",
                location: "",
                colors: false,
              },
              {
                type: "youth_group_time",
                name: "Convos - Small Group Time",
                start_time: "10:45 am",
                location: "",
                colors: false,
              },
              {
                type: "fork",
                name: "Lunch",
                start_time: "11:30 am",
                location: "Todd Dining Hall",
                colors: [183],
              },
              {
                type: "fork",
                name: "Lunch",
                start_time: "11:50 am",
                location: "Todd Dining Hall",
                colors: [575],
              },
              {
                type: "fork",
                name: "Lunch",
                start_time: "12:10 am",
                location: "Todd Dining Hall",
                colors: [187],
              },
              {
                type: "fork",
                name: "Lunch",
                start_time: "12:30 am",
                location: "Todd Dining Hall",
                colors: [185],
              },
              {
                type: "kingdom_worker",
                name: "Next Level (Graduated Seniors Only)",
                start_time: "1:00 pm",
                location: "",
                colors: false,
              },
              {
                type: "kingdom_worker",
                name: "Engage Elective",
                start_time: "2:00 pm",
                location: "",
                colors: false,
              },
              {
                type: "kingdom_worker",
                name: "Top 3 Elective",
                start_time: "2:00 pm",
                location: "",
                colors: false,
              },
              {
                type: "kingdom_worker",
                name: "Volleyball Tournament",
                start_time: "3:00 pm",
                location: "Lovinger Gym",
                colors: false,
              },
              {
                type: "kingdom_worker",
                name: "Ultimate Frisbee Tournament",
                start_time: "3:00 pm",
                location: "",
                colors: false,
              },
              {
                type: "kingdom_worker",
                name: "The Alternative",
                start_time: "4:00 pm",
                location: "Multipurpose Building",
                colors: false,
              },
              {
                type: "fork",
                name: "Dinner",
                start_time: "5:00 pm",
                location: "Todd Dining Hall",
                colors: [183],
              },
              {
                type: "fork",
                name: "Dinner",
                start_time: "5:20 pm",
                location: "Todd Dining Hall",
                colors: [575],
              },
              {
                type: "fork",
                name: "Dinner",
                start_time: "5:40 pm",
                location: "Todd Dining Hall",
                colors: [187],
              },
              {
                type: "fork",
                name: "Dinner",
                start_time: "6:00 pm",
                location: "Todd Dining Hall",
                colors: [185],
              },
              {
                type: "kingdom_worker",
                name: "Evening Prayers",
                start_time: "6:15 pm",
                location: "",
                colors: false,
              },
              {
                type: "kingdom_worker",
                name: "Cardboard Wars - Plane/Glider",
                start_time: "6:45 pm",
                location: "",
                colors: false,
              },
              {
                type: "main_program",
                name: "Stage B",
                start_time: "7:15 pm",
                location: "Multipurpose Building",
                colors: false,
              },
              {
                type: "main_program",
                name: "Evening Session",
                start_time: "7:30 pm",
                location: "Multipurpose Building",
                colors: false,
              },
              {
                type: "youth_group_time",
                name: "Youth Group Time",
                start_time: "9:15 pm",
                location: "",
                colors: false,
              },
              {
                type: "kingdom_worker",
                name: "Bingo",
                start_time: "10:45 pm",
                location: "",
                colors: false,
              },
              {
                type: "bed",
                name: "In Dorms",
                start_time: "11:30 pm",
                location: "",
                colors: false,
              },
            ],
          },
          {
            event: [
              {
                type: "kingdom_worker",
                name: "Spiritual Formation Society",
                start_time: "7:00 am",
                location: "",
                colors: false,
              },
              {
                type: "fork",
                name: "Breakfast",
                start_time: "7:30 am",
                location: "Todd Dining Hall",
                colors: [185],
              },
              {
                type: "fork",
                name: "Breakfast ",
                start_time: "7:50 am",
                location: "Todd Dining Hall",
                colors: [183],
              },
              {
                type: "fork",
                name: "Breakfast",
                start_time: "8:10 am",
                location: "Todd Dining Hall",
                colors: [575],
              },
              {
                type: "fork",
                name: "Breakfast",
                start_time: "8:30 am",
                location: "Todd Dining Hall",
                colors: [187],
              },
              {
                type: "paper",
                name: "Adult Leader Meeting",
                start_time: "8:30 am",
                location: "Chapel",
                colors: false,
              },
              {
                type: "main_program",
                name: "Morning Session",
                start_time: "9:00 am",
                location: "Multipurpose Building",
                colors: false,
              },
              {
                type: "selah",
                name: "SELAH",
                start_time: "10:30 am",
                location: "",
                colors: false,
              },
              {
                type: "youth_group_time",
                name: "Convos - Small Group Time",
                start_time: "10:45 am",
                location: "",
                colors: false,
              },
              {
                type: "kingdom_worker",
                name: "Extended Rec",
                start_time: "12:00 pm",
                location: "",
                colors: false,
              },
              {
                type: "fork",
                name: "Dinner",
                start_time: "5:00 pm",
                location: "Todd Dining Hall",
                colors: [185],
              },
              {
                type: "fork",
                name: "Dinner",
                start_time: "5:20 pm",
                location: "Todd Dining Hall",
                colors: [183],
              },
              {
                type: "fork",
                name: "Dinner",
                start_time: "5:40 pm",
                location: "Todd Dining Hall",
                colors: [575],
              },
              {
                type: "fork",
                name: "Dinner",
                start_time: "6:00 pm",
                location: "Todd Dining Hall",
                colors: [187],
              },
              {
                type: "kingdom_worker",
                name: "Evening Prayers",
                start_time: "6:15 pm",
                location: "",
                colors: false,
              },
              {
                type: "main_program",
                name: "Stage B",
                start_time: "7:00 pm",
                location: "Multipurpose Building",
                colors: false,
              },
              {
                type: "main_program",
                name: "Evening Session",
                start_time: "7:30 pm",
                location: "Multipurpose Building",
                colors: false,
              },
              {
                type: "youth_group_time",
                name: "Youth Group Time",
                start_time: "9:15 pm",
                location: "",
                colors: false,
              },
              {
                type: "kingdom_worker",
                name: "Classic Karaoke",
                start_time: "10:45 pm",
                location: "",
                colors: false,
              },
              {
                type: "bed",
                name: "In Dorms",
                start_time: "11:30 pm",
                location: "",
                colors: false,
              },
            ],
          },
          {
            event: [
              {
                type: "kingdom_worker",
                name: "Spiritual Formation Society",
                start_time: "7:00 am",
                location: "",
                colors: false,
              },
              {
                type: "fork",
                name: "Breakfast",
                start_time: "7:30 am",
                location: "Todd Dining Hall",
                colors: [187],
              },
              {
                type: "fork",
                name: "Breakfast",
                start_time: "7:50 am",
                location: "Todd Dining Hall",
                colors: [185],
              },
              {
                type: "fork",
                name: "Breakfast",
                start_time: "8:10 am",
                location: "Todd Dining Hall",
                colors: [183],
              },
              {
                type: "fork",
                name: "Breakfast",
                start_time: "8:30 am",
                location: "Todd Dining Hall",
                colors: [575],
              },
              {
                type: "paper",
                name: "Adult Leader Meeting",
                start_time: "8:30 am",
                location: "Chapel",
                colors: false,
              },
              {
                type: "main_program",
                name: "Morning Session",
                start_time: "9:00 am",
                location: "Multipurpose Building",
                colors: false,
              },
              {
                type: "selah",
                name: "SELAH",
                start_time: "10:30 am",
                location: "",
                colors: false,
              },
              {
                type: "youth_group_time",
                name: "Convos - Youth Group Time",
                start_time: "10:45 am",
                location: "",
                colors: false,
              },
              {
                type: "fork",
                name: "Lunch",
                start_time: "11:30 am",
                location: "Todd Dining Hall",
                colors: [187],
              },
              {
                type: "fork",
                name: "Lunch",
                start_time: "11:50 am",
                location: "Todd Dining Hall",
                colors: [185],
              },
              {
                type: "fork",
                name: "Lunch",
                start_time: "12:10 pm",
                location: "Todd Dining Hall",
                colors: [183],
              },
              {
                type: "fork",
                name: "Lunch",
                start_time: "12:30 pm",
                location: "Todd Dining Hall",
                colors: [575],
              },
              {
                type: "kingdom_worker",
                name: "Next Level (Graduated Seniors Only)",
                start_time: "1:00 pm",
                location: "",
                colors: false,
              },
              {
                type: "kingdom_worker",
                name: "So You Wanna Go Into Ministry Elective",
                start_time: "2:00 pm",
                location: "",
                colors: false,
              },
              {
                type: "kingdom_worker",
                name: "Dodgeball Tournament",
                start_time: "3:00 pm",
                location: "Lovinger Gym",
                colors: false,
              },
              {
                type: "fork",
                name: "Dinner",
                start_time: "5:00 pm",
                location: "Todd Dining Hall",
                colors: [187],
              },
              {
                type: "fork",
                name: "Dinner",
                start_time: "5:20 pm",
                location: "Todd Dining Hall",
                colors: [185],
              },
              {
                type: "fork",
                name: "Dinner",
                start_time: "5:40 pm",
                location: "Todd Dining Hall",
                colors: [183],
              },
              {
                type: "fork",
                name: "Dinner",
                start_time: "6:00 pm",
                location: "Todd Dining Hall",
                colors: [575],
              },
              {
                type: "main_program",
                name: "Stage B",
                start_time: "7:15 pm",
                location: "Multipurpose Building",
                colors: false,
              },
              {
                type: "main_program",
                name: "Final Session",
                start_time: "7:30 pm",
                location: "Multipurpose Building",
                colors: false,
              },
              {
                type: "youth_group_time",
                name: "Youth Group Time",
                start_time: "9:15 pm",
                location: "",
                colors: false,
              },
              {
                type: "bed",
                name: "In Dorms",
                start_time: "11:30 pm",
                location: "",
                colors: false,
              },
            ],
          },
        ],
      },
      campus_map: {
        show: true,
        campus_map: [
          {
            label: "University of Central Missouri Campus Map",
            image:
              "http://ciy-companion.local/wp-content/uploads/2023/06/ucm-parking-map.png",
          },
        ],
      },
      seating_chart: {
        show: true,
        seating_chart: false,
      },
      staff_contact: {
        show: false,
        contact: false,
      },
    },
  },
];
