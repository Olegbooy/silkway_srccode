import parse from 'html-react-parser';

import article1 from '../../../assets/img/news/article_1.png';
import article2 from '../../../assets/img/news/article_2.png';
import article3 from '../../../assets/img/news/article_3.png';
import article4 from '../../../assets/img/news/article_4.png';

import articleSlot1 from '../../../assets/img/news/article_slots_1.png';
import articleSlot3 from '../../../assets/img/news/article_slots_3.png';
import articleSlot4 from '../../../assets/img/news/article_slots_4.png';


export const newsData = [
	{
		pictureBackground: article1,
		picture: articleSlot1,
		additionalKey: 'Home',
		name: 'article1',
		description: 'Hedge Funds Ditch Diesel As Economic Fears Mount',
		date: '21.09.22',
		article: parse("<span>Hedge Funds Ditch Diesel As Economic Fears Mount</span><span>Institutional traders are selling their fuel positions in both the U.S. and Europe, a signal that global economic problems are worsening.</span><span>Meanwhile, demand for tankers is set to rise by 7 percent because of The EU ban on Russian oil products, which will increase fuel prices and add to energy inflation.</span><span>The Fed will likely announce its third 75-basis-point hike next week, which could be one of the things that spooked oil traders, although the ECB is not following as aggressive a policy. Institutional traders are selling their fuel positions at the fastest rate since early March as a slowdown looms over much of the world. This is the latest sign that worry about the world's immediate economic future is deepening as Europe faces a very real recession and the Fed risks stagflation in its fight with inflation.</span><span>Reuters John Kemp reported this week in his regular column that hedge funds and other market movers sold the equivalent of 8 million barrels of U.S. middle distillates and the same amount of European gas oil in the week to September 6 as slowdown clouds thickened.</span><span>Traders also sold the equivalent of 18 million barrels of Brent crude, 3 million barrels of WTI, and 3 million barrels of gasoline in the U.S.</span><span>When it comes to U.S. fuels, it's worth noting that gasoline prices have been falling for 13 weeks in a row. GasBuddy's Patrick De Haan tweeted that one in ten U.S. fuel stations now sold the fuel for $2.99 or less. This is very likely motivating more demand for gasoline, even in a bearish economic environment.</span><span>Middle distillates, meanwhile, remain in short supply in the United States. Reuters' Kemp again reported on that last week, saying inventories of middle distillates that were already low at the start of driving season were never replenished and remain critically low.</span><span>This is not very good news, even though local consumption of diesel and other middle distillates has flattened out at around 200,000 bpd below pre-pandemic levels. But exports are strong and about to become stronger after the European Union's embargo on Russian fuels comes into effect in early 2023.</span><span>When this happens, the EU would need to switch to another source for those fuels - and another source for crude oil, too - and the U.S. is one of the most obvious choices, if not the most obvious. Meanwhile, distillate inventories in Europe are at the lowest level since 2002, Kemp notes.</span><span>Speaking of the embargo, Bloomberg reported last week that it would spark a surge in the demand for tankers. Citing Danish tanker owner Torm, the report said that The EU ban on Russian oil products from February 2023 will spark a recalibration of the oil trade ecosystem. Some of this trade recalibration has already started.</span><span>According to the shipping company, the demand for tankers will rise by 7 percent because of that recalibration. This means that tanker rates will rise, too, affecting the prices of the fuels carried by tankers around the world, effectively contributing to the energy inflation that is at the very heart of the overall inflation the ECB and the Fed are trying to rein in using potentially dangerous tactics.</span><span>Reuters reported this week that the Fed will likely announce its third 75-basis-point hike next week. This is one of the things that could have spooked oil traders, as some skeptics of the Fed's policy have warned the fast and sharp rate hikes could have the opposite of the desired effect.</span><span>The ECB, meanwhile, which recently hiked rates by 75 basis points, says that it has more hikes up its sleeve but will not implement them in such large doses as the outlook for the eurozone economy is perking up.</span><span>We believe that the supply side, or source of this inflation, will abate, perhaps because of things happening in the U.S. and globally, and therefore prices of commodities and energy would subside, ECB Governing Council member Edward Scicluna told CNBC this week.</span>"),
		afterPictureArticle: parse("<span>A reversal of inflation fortunes in both the U.S. and Europe could change sentiment among traders, but it is still questionable whether such a reversal will take place.</span>")
	},
	{
		pictureBackground: article2,
		picture: article2,
		additionalKey: 'AboutUs',
		name: 'article2',
		description: 'Diesel dropping rapidly in futures market, outstripping declines in crude',
		date: '16.09.22',
		article: parse("<span>Hedge Funds Ditch Diesel As Economic Fears Mount</span><span>Institutional traders are selling their fuel positions in both the U.S. and Europe, a signal that global economic problems are worsening.</span><span>Meanwhile, demand for tankers is set to rise by 7 percent because of The EU ban on Russian oil products, which will increase fuel prices and add to energy inflation.</span><span>The Fed will likely announce its third 75-basis-point hike next week, which could be one of the things that spooked oil traders, although the ECB is not following as aggressive a policy.</span><span>Institutional traders are selling their fuel positions at the fastest rate since early March as a slowdown looms over much of the world. This is the latest sign that worry about the world's immediate economic future is deepening as Europe faces a very real recession and the Fed risks stagflation in its fight with inflation.</span><span>Reuters' John Kemp reported this week in his regular column that hedge funds and other market movers sold the equivalent of 8 million barrels of U.S. middle distillates and the same amount of European gas oil in the week to September 6 as slowdown clouds thickened.</span><span>Traders also sold the equivalent of 18 million barrels of Brent crude, 3 million barrels of WTI, and 3 million barrels of gasoline in the U.S.</span><span>When it comes to U.S. fuels, it's worth noting that gasoline prices have been falling for 13 weeks in a row. GasBuddy's Patrick De Haan tweeted that one in ten U.S. fuel stations now sold the fuel for $2.99 or less. This is very likely motivating more demand for gasoline, even in a bearish economic environment.</span><span>Middle distillates, meanwhile, remain in short supply in the United States. Reuters' Kemp again reported on that last week, saying inventories of middle distillates that were already low at the start of driving season were never replenished and remain critically low.</span><span>This is not very good news, even though local consumption of diesel and other middle distillates has flattened out at around 200,000 bpd below pre-pandemic levels. But exports are strong and about to become stronger after the European Union's embargo on Russian fuels comes into effect in early 2023.</span><span>When this happens, the EU would need to switch to another source for those fuels - and another source for crude oil, too - and the U.S. is one of the most obvious choices, if not the most obvious. Meanwhile, distillate inventories in Europe are at the lowest level since 2002, Kemp notes.</span><span>Speaking of the embargo, Bloomberg reported last week that it would spark a surge in the demand for tankers. Citing Danish tanker owner Torm, the report said that \"The EU ban on Russian oil products from February 2023 will spark a recalibration of the oil trade ecosystem. Some of this trade recalibration has already started.</span><span>According to the shipping company, the demand for tankers will rise by 7 percent because of that recalibration. This means that tanker rates will rise, too, affecting the prices of the fuels carried by tankers around the world, effectively contributing to the energy inflation that is at the very heart of the overall inflation the ECB and the Fed are trying to rein in using potentially dangerous tactics.</span><span>Reuters reported this week that the Fed will likely announce its third 75-basis-point hike next week. This is one of the things that could have spooked oil traders, as some skeptics of the Fed's policy have warned the fast and sharp rate hikes could have the opposite of the desired effect.</span><span>The ECB, meanwhile, which recently hiked rates by 75 basis points, says that it has more hikes up its sleeve but will not implement them in such large doses as the outlook for the eurozone economy is perking up.\n"
			+ "\"We believe that the supply side, or source of this inflation, will abate, perhaps because of things happening in the U.S. and globally, and therefore prices of commodities and energy would subside,\" ECB Governing Council member Edward Scicluna told CNBC this week.</span>"),
		afterPictureArticle: parse("<span>A reversal of inflation fortunes in both the U.S. and Europe could change sentiment among traders, but it is still questionable whether such a reversal will take place.</span>")
	},
	{
		pictureBackground: articleSlot3,
		picture: article3,
		additionalKey: 'News',
		name: 'article3',
		description: 'Silkway Petrole participated in 9th Black Sea Oil & Gas Conference',
		date: '10.09.22',
		article: parse("<span>Black Sea Oil & Gas is an annual B2B event providing a networking platform for the industry for the last 9 years. The conference has the reputation of the largest event in the region covering offshore, onshore, and midstream projects.</span><span>With the recent escalation of war in Ukraine, and the ongoing European energy crisis along with new legal initiatives across the Black Sea region, energy security issues are becoming increasingly acute while the region’s role is becoming more crucial.</span><span>Major upstream operator companies, regulators, vendors, consultancies, legal and financial institutions, as well as industry associations gathered in person at the 9th Black Sea Oil & Gas conference.</span><span>Johann Raunig, Partner of McKinsey & Company, presented in the opening session with the topic: “Exploring the impact of increasing energy transition pressures on the oil and gas sector. The outlook on the future of energy and global trends”. The presentation was mentioned previous challenges in the region connected with the beginning of the energy transition and examine future energy trends.</span>"),
		afterPictureArticle: parse("<span>Alexandra Damascan, President at Serinus Energy Romania, talked about the onshore upstream sector in Romania. This overview as focused on crucial energy security issues of the region and the important role of the onshore upstream sector that could have great investment potential. Participants discusse also the EU Green Deal and pathway for Europe to reduce its dependence on Russian gas, updates on the status of the most significant projects in Romania, Turkey, Georgia and Bulgaria, possible scenarios for the future of energy in the Black Sea, among other topics. Amongst other participants and partners are representatives of the State Agency of Oil and Gas Georgia, OMV Petrom, TotalEnergies, The Energy Community, ICIS, Central European Gas Hub, and many more.</span>")
	},
	{
		pictureBackground: articleSlot4,
		picture: article4,
		additionalKey: 'Community',
		name: 'article4',
		description: 'Global diesel market set to get tighter as industry seeks alternatives for gas',
		date: '06.09.22',
		article: parse("<span>The global diesel market looks set to get even tighter as power generators and industrial users seek relief from surging natural gas prices. Consumers are seeking alternatives to gas after prices rallied to unprecedented levels as Russia’s invasion of Ukraine sparked an energy crisis in Europe.</span><span>It is also occurring as global diesel stockpiles remain unusually low at a time inventories are typically expanding in preparation for a boost in consumption over winter.</span><span>The International Energy Agency this month raised its forecast for global oil demand growth on expectations for more fuel-switching from gas, which it said will be concentrated in Europe and the Middle East. US exports of crude and products rose to a record last week, with diesel leading the surge. The rush for the fuel is a boon for refiners but will add more inflationary pressure to the global economy.</span><span>The drought in Europe and a drop in exports of diesel from China are worsening the shortage, along with concern over Russian diesel flows into Europe, where the energy crisis is most acute.</span><span>A flotilla of tankers — including at least one supertanker — is steaming from the Middle East and Asia to Europe, which is also grappling with disruptions caused by shallow water on the Rhine.</span><span>Europe is facing a diesel shortfall of about 1.5 million barrels a day and the deficit could expand as consumers replace natural gas with oil products. The industry consultant estimates profits in Europe from making middle distillates — which include diesel — are expected to rally to a record $70 a barrel during winter. The margin is currently around $55, ICE Futures Europe data showed.</span><span>Year-on-year demand for non-road gas oil and fuel oil will rise by 220,000 barrels a day in OECD Europe in the fourth and first quarters, the energy agency said. To put that in context, the region’s demand for diesel-type fuels was 6.26 million barrels a day last year.</span>"),
		afterPictureArticle: parse("<span>Diesel profits have also rallied in Asia and the US, where nationwide distillate stockpiles are at the lowest for the time of year in more than two decades.\n"
			+ "A fire at the largest US Midwest refinery on Thursday threatens to cut already low reserves right as farmers in the region are preparing to harvest. Such unplanned cuts add to scheduled seasonal maintenance, indicating the US may not be able to sustain record-high fuel exports in the coming months, especially when cold weather descends in the north-east of the country.</span><span>The heating season could boost east coast diesel use by 400,000 barrels per day, said Linda Giesecke, an analyst from consultancy ESAI.</span>")
	},

];
