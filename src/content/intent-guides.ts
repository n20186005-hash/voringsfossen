export type IntentGuide = {
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  eyebrow: string;
  intro: string;
  quickFacts: string[];
  sections: Array<{
    heading: string;
    paragraphs: string[];
    bullets?: string[];
  }>;
  faq: Array<{q: string; a: string}>;
};

export const intentGuides: IntentGuide[] = [
  {
    slug: 'parking',
    title: 'Vøringsfossen Parking: Fossli & Fossatromma',
    metaTitle: 'Vøringsfossen Parking: Fossli & Fossatromma Guide',
    description: 'Compare the free parking areas at Fossli and Fossatromma, seasonal access, facilities and the best starting point for Vøringsfossen viewpoints.',
    eyebrow: 'Parking guide',
    intro: 'Vøringsfossen has two main visitor parking areas: Fossli and Fossatromma. Official Hardanger visitor information states that both are free. They serve different parts of the viewpoint route, so the best choice depends on which paths are open and how far your group is comfortable walking.',
    quickFacts: ['Free parking at Fossli and Fossatromma', 'Seasonal access affected by snow and ice', '5785 Eidfjord · Plus Code C7G2+JH'],
    sections: [
      {
        heading: 'Fossli parking',
        paragraphs: ['Fossli is beside the upper visitor area on Route 7. It is a practical starting point for the hotel-side viewpoints and the signed route toward the step bridge when that connection is open.'],
        bullets: ['Check barriers before setting out', 'Expect higher demand in peak summer', 'Do not use closed winter access as an informal parking area'],
      },
      {
        heading: 'Fossatromma parking',
        paragraphs: ['Fossatromma serves the opposite side of the developed visitor route and offers access to its own viewpoints. It can be a useful alternative when you want to explore the secured paths from that side.'],
        bullets: ['Follow the signed pedestrian route', 'Keep bus and service areas clear', 'Facilities may be closed outside the main season'],
      },
      {
        heading: 'Which parking area should you choose?',
        paragraphs: ['Check the current Norwegian Scenic Routes notice first. If the complete path and step bridge are open, either area can work as a starting point. If part of the route is closed, choose the area that directly serves the viewpoint you want to visit rather than crossing a barrier.'],
      },
      {
        heading: 'Winter and EV planning',
        paragraphs: ['Snow can reduce capacity or close parking and visitor facilities. Check Statens vegvesen before driving across Hardangervidda. Charging availability changes, so use a current Norwegian charging map rather than relying on an old list of chargers.'],
      },
    ],
    faq: [
      {q: 'Is parking at Vøringsfossen free?', a: 'Yes. Official Hardanger visitor information states that parking at Fossli and Fossatromma is free.'},
      {q: 'Which parking area is closest to the step bridge?', a: 'Both areas connect with the developed route when it is fully open. Choose according to current closures, mobility needs and the viewpoints you want to see.'},
      {q: 'Can I park at Vøringsfossen in winter?', a: 'Do not assume access. Snow and ice can close or restrict the parking areas, paths, toilets and step bridge. Check official notices before travelling.'},
    ],
  },
  {
    slug: 'how-to-get-there',
    title: 'How to Get to Vøringsfossen',
    metaTitle: 'How to Get to Vøringsfossen: Car, Bus & Map',
    description: 'Directions to Vøringsfossen from Eidfjord, Bergen and Oslo, with Route 7 driving advice, seasonal public transport and map coordinates.',
    eyebrow: 'Directions',
    intro: 'Vøringsfossen lies beside Route 7 on the climb from Eidfjord toward Hardangervidda. Driving is the most flexible option, while bus or shuttle connections depend strongly on the date and season.',
    quickFacts: ['Route 7, 5785 Eidfjord', 'About 20 minutes by road from Eidfjord village', 'Check mountain road conditions before departure'],
    sections: [
      {
        heading: 'By car',
        paragraphs: ['From Eidfjord, follow Route 7 toward Hardangervidda and the signed visitor areas at Fossli or Fossatromma. From Bergen, the usual route runs via Voss, Hardanger and Eidfjord. From Oslo, Route 7 crosses the mountain plateau when conditions permit.'],
        bullets: ['Use Statens vegvesen for live road status', 'Allow extra time for ferries, tunnels, weather and scenic stops', 'Winter equipment and restrictions can apply'],
      },
      {
        heading: 'By train and bus',
        paragraphs: ['There is no railway station at Vøringsfossen or in Eidfjord. A common car-free plan begins with the Bergen–Voss train and continues by bus toward Hardanger and Eidfjord. Connections vary, and arrival in Eidfjord does not guarantee a same-day connection to the waterfall.'],
      },
      {
        heading: 'Seasonal shuttle or taxi',
        paragraphs: ['Seasonal visitor transport may operate from Eidfjord during the main season. Confirm the operator, stops and return time with Visit Eidfjord. A pre-booked taxi can be a fallback, but agree the return journey before leaving the village.'],
      },
      {
        heading: 'Map and navigation',
        paragraphs: ['Search for Vøringsfossen rather than navigating only to the centre of Eidfjord. The destination is in postcode 5785 and uses Plus Code C7G2+JH. Download an offline map before crossing the plateau.'],
      },
    ],
    faq: [
      {q: 'Can I reach Vøringsfossen without a car?', a: 'Sometimes, but the final connection is seasonal. Check current bus or shuttle schedules for your exact date and keep a return option.'},
      {q: 'Is Vøringsfossen on the road between Bergen and Oslo?', a: 'It is beside Route 7 across Hardangervidda, one of the possible road corridors between western and eastern Norway.'},
      {q: 'What should I enter in Google Maps?', a: 'Use Vøringsfossen, 5785 Eidfjord, or Plus Code C7G2+JH, then follow local signs to an open visitor parking area.'},
    ],
  },
  {
    slug: 'hiking',
    title: 'Vøringsfossen Hiking Guide',
    metaTitle: 'Vøringsfossen Hike: Viewpoint Walks & Trail Safety',
    description: 'Understand the difference between the developed viewpoint walks and longer Vøringsfossen hikes, with seasonal closures, footwear and safety advice.',
    eyebrow: 'Hiking',
    intro: 'A visit to the upper viewpoints is not the same as a hike into Måbødalen. The visitor area uses secured paths, stairs and the step bridge; longer trails require separate planning and should only be attempted when officially open.',
    quickFacts: ['Upper route includes stairs and secured paths', 'Longer gorge trails require separate planning', 'Never cross seasonal closure barriers'],
    sections: [
      {
        heading: 'The viewpoint walk',
        paragraphs: ['When the full visitor route is open, allow roughly 1–2 hours to move between viewpoints, take photographs and cross the step bridge. This route still includes gradients, stairs and wet surfaces.'],
      },
      {
        heading: 'Longer hikes in Måbødalen',
        paragraphs: ['Trails toward the lower valley are more demanding than the upper visitor route and can be affected by water, rockfall, snow and maintenance. Use an official current trail description and do not treat an old trip report as proof that a trail is open today.'],
        bullets: ['Tell someone your route', 'Carry water, layers and offline navigation', 'Turn back if signs, barriers or conditions indicate closure'],
      },
      {
        heading: 'Footwear and weather',
        paragraphs: ['Wear waterproof hiking shoes with reliable grip. Mist can soak exposed surfaces even on a dry day, and mountain weather can change quickly. Pack a waterproof layer and keep both hands free on stairs.'],
      },
      {
        heading: 'Hiking with children or limited mobility',
        paragraphs: ['Use the shortest signed route to an open viewpoint and avoid committing to the full connection before checking stairs and conditions. Some viewpoints have step-free access, but the step bridge and several links do not.'],
      },
    ],
    faq: [
      {q: 'Do I need to hike to see Vøringsfossen?', a: 'No. Open upper viewpoints can be reached from the visitor parking areas, although some routes include stairs and gradients.'},
      {q: 'How long is the viewpoint walk?', a: 'Allow about 1–2 hours when the complete developed route is open. Your time depends on closures, crowds and mobility.'},
      {q: 'Are the hiking trails open in winter?', a: 'Do not assume they are. Snow and ice commonly close or restrict paths, the step bridge and facilities.'},
    ],
  },
  {
    slug: 'viewpoints-step-bridge',
    title: 'Vøringsfossen Viewpoints & Step Bridge',
    metaTitle: 'Vøringsfossen Viewpoints and Step Bridge Guide',
    description: 'Plan the Vøringsfossen viewpoint route between Fossli and Fossatromma, see the 99-step bridge and understand seasonal closures and accessibility.',
    eyebrow: 'Viewpoints',
    intro: 'The modern Vøringsfossen visitor project links viewpoints around the gorge with secured paths, stairs and a dramatic step bridge. Architect Carl-Viggo Hølmebakk designed the project for Norwegian Scenic Routes.',
    quickFacts: ['Step bridge with 99 steps', 'Designed by Carl-Viggo Hølmebakk', 'Connections are seasonal'],
    sections: [
      {
        heading: 'The step bridge',
        paragraphs: ['The bridge opened in 2020 and crosses the gorge as a flight of 99 steps. It is a walking connection and viewpoint, not a level footbridge. Wet or icy conditions can make it unsuitable or lead to closure.'],
      },
      {
        heading: 'Fossli viewpoints',
        paragraphs: ['The Fossli side provides high views toward the waterfall and valley. Use the marked route from the open parking area and read current signs before continuing toward the bridge.'],
      },
      {
        heading: 'Fossatromma viewpoints',
        paragraphs: ['Fossatromma gives access to another part of the developed viewing route. When the complete connection is open, visitors can experience changing angles instead of treating one platform as the only viewpoint.'],
      },
      {
        heading: 'Safety and accessibility',
        paragraphs: ['The official route uses well-secured paths and safety fences. That does not remove the risks of steep terrain, slippery spray, stairs or sudden weather. Step-free access exists to parts of the upper area, but not across every connection.'],
      },
    ],
    faq: [
      {q: 'How many steps are on the Vøringsfossen bridge?', a: 'The bridge is commonly described by Norwegian Scenic Routes as having 99 steps.'},
      {q: 'Who designed the Vøringsfossen viewpoints?', a: 'Architect Carl-Viggo Hølmebakk designed the visitor project for Norwegian Scenic Routes.'},
      {q: 'Is the step bridge open all year?', a: 'No guarantee should be assumed. Snow, ice and seasonal operations can close the bridge and connecting paths.'},
    ],
  },
  {
    slug: 'bergen-to-voringsfossen',
    title: 'Bergen to Vøringsfossen',
    metaTitle: 'Bergen to Vøringsfossen: Driving Route & Day Trip',
    description: 'Plan a Bergen to Vøringsfossen drive via Voss, Hardanger and Eidfjord, with realistic timing, road checks and car-free planning advice.',
    eyebrow: 'From Bergen',
    intro: 'The drive from Bergen to Vøringsfossen combines major roads, tunnels and the Hardanger landscape. A direct journey often takes roughly 2.5–3 hours in normal conditions, but weather, traffic and stops can add substantial time.',
    quickFacts: ['Typical route via Voss and Eidfjord', 'Allow more than navigation time for a day trip', 'Check roads and return daylight in winter'],
    sections: [
      {
        heading: 'Suggested driving route',
        paragraphs: ['Follow E16 from Bergen toward Voss, continue toward Hardanger and Eidfjord, then climb Route 7 to Vøringsfossen. Follow current navigation and road signs because closures and traffic management can change the best approach.'],
      },
      {
        heading: 'Day-trip timing',
        paragraphs: ['A same-day return is possible in the main season, but it is a long driving day. Add time for the viewpoint route, food, charging or fuel, and stops around Hardanger. Avoid scheduling the return around the last minute of daylight in winter.'],
      },
      {
        heading: 'Without a car',
        paragraphs: ['A car-free trip may combine the Bergen–Voss train, bus to Eidfjord and a seasonal connection or taxi to the waterfall. Verify every transfer and the return trip before departure; not all services run daily or outside summer.'],
      },
      {
        heading: 'Road conditions',
        paragraphs: ['Use Statens vegvesen for incidents, winter restrictions and mountain conditions. Navigation estimates do not account reliably for convoy driving, temporary closures or time spent at scenic stops.'],
      },
    ],
    faq: [
      {q: 'How long does Bergen to Vøringsfossen take?', a: 'A direct drive is often around 2.5–3 hours in normal conditions, but route, traffic, weather and stops can make it longer.'},
      {q: 'Can Vøringsfossen be a day trip from Bergen?', a: 'Yes in suitable conditions, but allow a full day and avoid an overpacked schedule.'},
      {q: 'Is there a direct train from Bergen?', a: 'No. Train travel reaches Voss, after which you need bus transport toward Eidfjord and a seasonal final connection.'},
    ],
  },
  {
    slug: 'eidfjord-to-voringsfossen',
    title: 'Eidfjord to Vøringsfossen',
    metaTitle: 'Eidfjord to Vøringsfossen: Route, Bus & Taxi',
    description: 'Travel from Eidfjord village to Vøringsfossen by car, seasonal transport or taxi, with distance, return planning and map advice.',
    eyebrow: 'From Eidfjord',
    intro: 'Vøringsfossen is reached by climbing Route 7 from Eidfjord toward Hardangervidda. The road journey is usually about 20 minutes in normal conditions, but it is a mountain route and can be affected by weather or traffic controls.',
    quickFacts: ['About 20 minutes by road in normal conditions', 'Route 7 toward Hardangervidda', 'Seasonal transport must be confirmed'],
    sections: [
      {
        heading: 'Driving from Eidfjord',
        paragraphs: ['Leave the village on Route 7 toward Hardangervidda and follow signs for Vøringsfossen, Fossli or Fossatromma. The road climbs through tunnels and mountain terrain; use marked parking rather than stopping on the roadside.'],
      },
      {
        heading: 'Seasonal transport',
        paragraphs: ['A visitor connection may operate in the main season. Timetables, stops and operators can change each year, so check with Visit Eidfjord and make sure the service includes a usable return departure.'],
      },
      {
        heading: 'Taxi planning',
        paragraphs: ['Book ahead, confirm the pickup side of the visitor area and arrange your return before leaving Eidfjord. Mobile coverage and taxi availability should not be treated as guaranteed at every time of day.'],
      },
      {
        heading: 'Combine the visit',
        paragraphs: ['Eidfjord is the practical place to check food, fuel, charging and current local advice before the climb. Keep enough time to return safely if weather worsens or part of the visitor route is closed.'],
      },
    ],
    faq: [
      {q: 'How far is Vøringsfossen from Eidfjord?', a: 'The road trip is typically about 20 minutes in normal conditions; check live navigation and road status for your date.'},
      {q: 'Can I walk from Eidfjord to Vøringsfossen?', a: 'It is not a simple roadside walk. Use a documented hiking route and current local advice rather than walking along the main road.'},
      {q: 'Does the Eidfjord shuttle run every day?', a: 'Service is seasonal and can change. Confirm the exact date, stops and return journey with the current operator or tourist information.'},
    ],
  },
  {
    slug: 'best-time-to-visit',
    title: 'Best Time to Visit Vøringsfossen',
    metaTitle: 'Best Time to Visit Vøringsfossen: Seasons & Water Flow',
    description: 'Compare spring, summer, autumn and winter at Vøringsfossen, including water flow, crowds, daylight, road conditions and seasonal closures.',
    eyebrow: 'Season guide',
    intro: 'For most visitors, the best time is between late spring and early autumn, when the developed viewpoints and facilities are most likely to be open. The waterfall remains part of the landscape year-round, but access is not the same in every season.',
    quickFacts: ['Main visitor season: spring to autumn', 'Snowmelt can strengthen spring and early-summer flow', 'Winter access is limited and weather-dependent'],
    sections: [
      {
        heading: 'Late spring',
        paragraphs: ['Snowmelt can create powerful flow, but high-elevation snow may still delay the opening of paths, the bridge or facilities. Confirm opening notices rather than choosing a date solely for water volume.'],
      },
      {
        heading: 'Summer',
        paragraphs: ['Summer offers long daylight and the best chance of full visitor access. It is also the busiest period, so arrive earlier in the day, park only in marked areas and allow time for crowded viewpoints.'],
      },
      {
        heading: 'Early autumn',
        paragraphs: ['Autumn can bring quieter paths and changing colour, while daylight and temperatures fall quickly. Seasonal services may reduce before the first major snowfall.'],
      },
      {
        heading: 'Winter',
        paragraphs: ['The waterfall may still be visible from accessible areas, but viewpoints, paths, the step bridge, parking and toilets can be closed. Mountain driving requires current road checks and appropriate equipment.'],
      },
    ],
    faq: [
      {q: 'What month is best for Vøringsfossen?', a: 'There is no single guaranteed month. June to September generally gives the best chance of open visitor facilities, while exact conditions vary each year.'},
      {q: 'When is the waterfall strongest?', a: 'Snowmelt often increases flow in late spring and early summer, but rainfall and regulated water conditions also affect what you see.'},
      {q: 'Is Vøringsfossen crowded?', a: 'Peak summer can be busy, especially around midday. Arriving earlier and allowing flexible time helps.'},
    ],
  },
  {
    slug: 'winter',
    title: 'Vøringsfossen in Winter',
    metaTitle: 'Vøringsfossen in Winter: Closures, Roads & Safety',
    description: 'What to expect at Vøringsfossen in winter: seasonal viewpoint and step-bridge closures, Route 7 conditions, parking, toilets and safe planning.',
    eyebrow: 'Winter visit',
    intro: 'Vøringsfossen is a natural landscape, not a 24-hour visitor facility. In winter, snow and ice can close the developed viewpoints, step bridge, trails, parking areas and toilets even when part of the waterfall is visible from an accessible location.',
    quickFacts: ['Do not assume viewpoints are open', 'Check Route 7 immediately before travel', 'Never pass a winter closure barrier'],
    sections: [
      {
        heading: 'What may be closed?',
        paragraphs: ['Seasonal closures can affect the step bridge, connecting paths, some viewpoints, toilets and parking. Closure timing changes with snow, ice, maintenance and safety assessments.'],
      },
      {
        heading: 'Driving Route 7',
        paragraphs: ['Check Statens vegvesen for closures, convoy driving and winter requirements. Carry appropriate equipment and enough charge or fuel, and be prepared to change plans if the mountain road deteriorates.'],
      },
      {
        heading: 'Safe viewing',
        paragraphs: ['Use only areas explicitly open to visitors. Snow can hide edges and ice can form under fresh powder. Do not climb barriers or improvise a viewpoint from the roadside.'],
      },
      {
        heading: 'A flexible alternative',
        paragraphs: ['Build a winter itinerary around Eidfjord and Hardanger rather than making access to one platform essential. If the site is closed, respect the closure and use official local advice for another safe stop.'],
      },
    ],
    faq: [
      {q: 'Is Vøringsfossen open 24 hours in winter?', a: 'No such visitor-facility guarantee should be assumed. The waterfall exists year-round, but access, viewpoints, bridge, trails, parking and toilets are seasonal.'},
      {q: 'Can I cross the step bridge in winter?', a: 'Only if it is officially open. Snow and ice commonly lead to seasonal closure.'},
      {q: 'Where can I check winter road conditions?', a: 'Use Statens vegvesen traffic information immediately before departure and monitor conditions during the trip.'},
    ],
  },
  {
    slug: 'shuttle-bus',
    title: 'Vøringsfossen Shuttle Bus',
    metaTitle: 'Vøringsfossen Shuttle Bus from Eidfjord: Planning Guide',
    description: 'How to check seasonal shuttle or bus transport from Eidfjord to Vøringsfossen, including stops, return times and backup options.',
    eyebrow: 'Car-free visit',
    intro: 'Transport between Eidfjord and Vøringsfossen is seasonal. A timetable or fare from a previous year should not be treated as current: verify the operator, dates, stops and return journey for the day you plan to travel.',
    quickFacts: ['Seasonal rather than year-round', 'Confirm the return before leaving Eidfjord', 'Keep a taxi or revised itinerary as backup'],
    sections: [
      {
        heading: 'Where to check',
        paragraphs: ['Start with Visit Eidfjord, Entur and the current regional operator. Confirm that the service goes to a Vøringsfossen visitor stop rather than only passing through Eidfjord or continuing along Route 7.'],
      },
      {
        heading: 'Questions to confirm',
        paragraphs: ['Check the operating dates, departure stop, arrival side, fare, ticket method, luggage rules and final return. Ask whether weather or road restrictions can cancel the service at short notice.'],
      },
      {
        heading: 'Time at the waterfall',
        paragraphs: ['Compare the gap between arrival and return with the open route. Around 1–2 hours can work for the developed viewpoints, but closures may change where you can walk and where the bus collects passengers.'],
      },
      {
        heading: 'Backup plan',
        paragraphs: ['Do not rely on an unbooked taxi appearing at the viewpoint. If service is uncertain, arrange a taxi in advance, join a confirmed excursion or keep the day in Eidfjord rather than risk missing the return.'],
      },
    ],
    faq: [
      {q: 'Is there a year-round bus to Vøringsfossen?', a: 'Do not assume one. Visitor transport is seasonal and schedules can change each year.'},
      {q: 'How much does the shuttle cost?', a: 'Use the current operator timetable. Old prices are not reliable enough for trip planning.'},
      {q: 'Can I buy a ticket on the bus?', a: 'Ticket methods vary by operator. Confirm whether advance booking or an app is required before departure.'},
    ],
  },
];

export const intentGuideMap = new Map(intentGuides.map((guide) => [guide.slug, guide]));
