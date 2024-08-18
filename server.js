async function handleRequest(request) {
  // How to create a subscribe link and give it to the family with iSegaro
  const url = new URL(request.url);
  const provider = url.searchParams.get("subs");

  let links = [];
  
  // لینک عمومی که برای همه ارسال می‌شود
  const generalLinks = [
    'vless://45b2b86a-5d19-11ef-8ab0-b7ab60f52bc3@nl3.vpnjantit.com:10002?encryption=none&security=tls&type=ws&path=%2fvpnjantit#test-easy'
   
    // سایر لینک‌های عمومی
  ];
  
  if (provider === "Mostafa-05") {
    links = [
	  'vless://c4642782-e7b8-4254-93a0-03cb76afb897@cdnjs.com:443?encryption=none&security=tls&sni=all-ws.sinasv.ir&alpn=h2%2Chttp%2F1.1&fp=chrome&type=ws&host=all-ws.sinasv.ir&path=%2Flasso%2F%3Fed%3D1024#Mostafa-WS-%F0%9F%87%B8%F0%9F%87%AA',
      'vless://de748705-de28-4b3b-a874-a636bdbbe256@openai.com:443?encryption=none&security=tls&sni=all-grp.sinasv.ir&alpn=h2%2Chttp%2F1.1&fp=chrome&type=grpc&host=all-grp.sinasv.ir&serviceName=lasso3&mode=gun#Mostafa-gRPC-%F0%9F%87%B8%F0%9F%87%AA',
      'vless://693105a9-807d-4ad3-a6b8-e1d91bc488fc@speedtestnet.mohombi.ir:443?encryption=none&security=tls&sni=all-ws.sbgzagros.ir&alpn=h2%2Chttp%2F1.1&fp=chrome&type=ws&host=all-ws.sbgzagros.ir&path=%2Flasso%40Arezoo_tk%2F%3Fed%3D2048#Mostafa-WS-%F0%9F%87%B3%F0%9F%87%B1',
      'vless://bc12cc3e-1b79-4742-b528-d1e75d6afbd7@speedtestnet.mohombi.ir:443?type=grpc&serviceName=lasso3&security=tls&fp=chrome&alpn=h2%2Chttp%2F1.1&allowInsecure=1&sni=all-grp.sbgzagros.ir#Mostafa-gRPC-%F0%9F%87%B3%F0%9F%87%B1',
	  'vless://6cd8375d-4618-4304-fa05-191392d3dbbe@speedtest.net:443?encryption=none&security=tls&sni=speedtest.net&alpn=h3%2Ch2%2Chttp%2F1.1&fp=chrome&allowInsecure=1&type=ws&host=sine85.com&path=%2Fsineh%4085_saroon%2F%3Fed%3D1024#Mostafa-Fastly-%F0%9F%87%B3%F0%9F%87%B1',
 'trojan://CEkHQhh4BF@81.28.12.12:443?security=tls&alpn=h3%2Ch2%2Chttp%2F1.1&fp=chrome&allowInsecure=1&type=ws&host=speedtest-gcr.zagrost.ir&path=%2FSolana_shir%40nadare%2F%3Fed%3D1024#Mosi-GG-%F0%9F%87%B3%F0%9F%87%B1',     
	 'vless://693105a9-807d-4ad3-a6b8-e1d91bc488fc@bama.ir:443?encryption=none&security=tls&alpn=h3%2Ch2%2Chttp%2F1.1&fp=chrome&type=ws&host=mana-c9ff40cdb8-hesam.apps.ir-thr-ba1.arvancaas.ir&path=%2Flasso%40Arezoo_tk%2F%3Fed%3D2048&sni=mana-c9ff40cdb8-hesam.apps.ir-thr-ba1.arvancaas.ir#Mostafa-NimV.4-%F0%9F%87%AE%F0%9F%87%B7%F0%9F%87%B3%F0%9F%87%B1'
	 


    ];
  } else if (provider === "Koosha-18") {
    links = [
      'vless://e548033d-0d7d-4a1b-9579-2f1f97ffbe3c@cdnjs.com:443?encryption=none&security=tls&sni=all-ws.sinasv.ir&alpn=h2%2Chttp%2F1.1&fp=chrome&type=ws&host=all-ws.sinasv.ir&path=%2Flasso%2F%3Fed%3D1024#Koosha-WS-%F0%9F%87%B8%F0%9F%87%AA',
      'vless://39bf17fb-c3af-4889-838b-3fb89f0c8978@speedtestnet.mohombi.ir:443?encryption=none&security=tls&sni=all-grp-2.sbgzagros.ir&alpn=h2%2Chttp%2F1.1&fp=chrome&type=grpc&serviceName=lasso3&mode=gun#Koosha-gRPC-%F0%9F%87%B8%F0%9F%87%AA',
      'vless://8b94c94d-d773-4faa-b546-71a0c94c5007@openai.com:443?encryption=none&security=tls&sni=all-ws.sbgzagros.ir&alpn=h2%2Chttp%2F1.1&fp=chrome&type=ws&host=all-ws.sbgzagros.ir&path=%2Flasso%40Arezoo_tk%2F%3Fed%3D2048#Koosha-WS-%F0%9F%87%B3%F0%9F%87%B1',
      'vless://4a3b347d-975f-4c6d-9c12-0e81d3f47f0d@speedtestnet.mohombi.ir:443?type=grpc&serviceName=lasso3&security=tls&fp=chrome&alpn=h2%2Chttp%2F1.1&allowInsecure=1&sni=all-grp.sbgzagros.ir#Koosha-gRPC-%F0%9F%87%B3%F0%9F%87%B1',
	  'vless://8b94c94d-d773-4faa-b546-71a0c94c5007@rithl.mohombi.ir:443?encryption=none&security=tls&sni=all-ws.sbgzagros.ir&alpn=h2%2Chttp%2F1.1&fp=chrome&type=ws&host=all-ws.sbgzagros.ir&path=%2Flasso%40Arezoo_tk%2F%3Fed%3D2048#Koosha-Rightel-%F0%9F%87%B3%F0%9F%87%B1',
	  'vless://8b94c94d-d773-4faa-b546-71a0c94c5007@all.mohombi.ir:443?encryption=none&security=tls&sni=all-ws.sbgzagros.ir&alpn=h2%2Chttp%2F1.1&fp=chrome&type=ws&host=all-ws.sbgzagros.ir&path=%2Flasso%40Arezoo_tk%2F%3Fed%3D2048#Koosha-Irancell-%F0%9F%87%B3%F0%9F%87%B1'
	  
    ];
  } else if (provider === "Koosha-1806") {
    links = [      
      'vless://e548033d-0d7d-4a1b-9579-2f1f97ffbe3c@cdnjs.com:443?encryption=none&security=tls&sni=all-ws.sinasv.ir&alpn=h2%2Chttp%2F1.1&fp=chrome&type=ws&host=all-ws.sinasv.ir&path=%2Flasso%2F%3Fed%3D1024#Koosha-WS-%F0%9F%87%B8%F0%9F%87%AA',
      'vless://39bf17fb-c3af-4889-838b-3fb89f0c8978@speedtestnet.mohombi.ir:443?encryption=none&security=tls&sni=all-grp-2.sbgzagros.ir&alpn=h2%2Chttp%2F1.1&fp=chrome&type=grpc&serviceName=lasso3&mode=gun#Koosha-gRPC-%F0%9F%87%B8%F0%9F%87%AA',
      'vless://8b94c94d-d773-4faa-b546-71a0c94c5007@speedtestnet.mohombi.ir:443?encryption=none&security=tls&sni=all-ws.sbgzagros.ir&alpn=h2%2Chttp%2F1.1&fp=chrome&type=ws&host=all-ws.sbgzagros.ir&path=%2Flasso%40Arezoo_tk%2F%3Fed%3D2048#Koosha-WS-%F0%9F%87%B3%F0%9F%87%B1',
	  'vless://5bef8a9f-6fb5-4fbe-bd87-edd4883d2883@spark-stg.partnersonline.com:443?encryption=none&security=tls&sni=sine85.com&alpn=h3%2Ch2%2Chttp%2F1.1&fp=chrome&allowInsecure=1&type=ws&host=sine85.com&path=%2Fsineh%4085_saroon%2F%3Fed%3D1024#Koosha-Fastly-%F0%9F%87%B3%F0%9F%87%B1',
	  'trojan://YPWa58c38X@81.28.12.12:443?security=tls&alpn=h3%2Ch2%2Chttp%2F1.1&fp=chrome&allowInsecure=1&type=ws&host=speedtest-gcr.zagrost.ir&path=%2FSolana_shir%40nadare%2F%3Fed%3D1024#Koosha-GG-%F0%9F%87%B3%F0%9F%87%B1',
      'vless://8b94c94d-d773-4faa-b546-71a0c94c5007@bama.ir:443?encryption=none&security=tls&alpn=h3%2Ch2%2Chttp%2F1.1&fp=chrome&type=ws&host=mana-c9ff40cdb8-hesam.apps.ir-thr-ba1.arvancaas.ir&path=%2Flasso%40Arezoo_tk%2F%3Fed%3D2048&sni=mana-c9ff40cdb8-hesam.apps.ir-thr-ba1.arvancaas.ir#Koosha-NimV.4-%F0%9F%87%AE%F0%9F%87%B7%F0%9F%87%B3%F0%9F%87%B1'
    ];
  } else if (provider === "Mary-21") {
    links = [    
      'vless://1b63f469-a428-49f4-bace-caf1a835eab5@cdnjs.com:443?encryption=none&security=tls&sni=all-ws.sinasv.ir&alpn=h2%2Chttp%2F1.1&fp=chrome&type=ws&host=all-ws.sinasv.ir&path=%2Flasso%2F%3Fed%3D1024#Mary-WS-%F0%9F%87%B8%F0%9F%87%AA',
      'vless://7ca1171d-6db1-4277-803d-f678d0999a38@openai.com:443?encryption=none&security=tls&sni=all-grp.sinasv.ir&alpn=h2%2Chttp%2F1.1&fp=chrome&type=grpc&host=all-grp.sinasv.ir&serviceName=lasso3&mode=gun#Maryam-gRPC-%F0%9F%87%B8%F0%9F%87%AA',
      'vless://67eeadc9-0f75-4aed-a581-a786b54ab363@speedtestnet.mohombi.ir:443?encryption=none&security=tls&sni=all-ws.sbgzagros.ir&alpn=h2%2Chttp%2F1.1&fp=chrome&type=ws&host=all-ws.sbgzagros.ir&path=%2Flasso%40Arezoo_tk%2F%3Fed%3D2048#Maryam-WS-%F0%9F%87%B3%F0%9F%87%B1',
      'vless://d609818f-23cd-483f-e781-4e3582942a3b@spark-stg.partnersonline.com:443?encryption=none&security=tls&sni=sine85.com&alpn=h3%2Ch2%2Chttp%2F1.1&fp=chrome&allowInsecure=1&type=ws&host=sine85.com&path=%2Fsineh%4085_saroon%2F%3Fed%3D1024#Mary-Fastly-%F0%9F%87%B3%F0%9F%87%B1',	  
	  'trojan://swrD5yCcHm@81.28.12.12:443?security=tls&alpn=h3%2Ch2%2Chttp%2F1.1&fp=chrome&allowInsecure=1&type=ws&host=speedtest-gcr.zagrost.ir&path=%2FSolana_shir%40nadare%2F%3Fed%3D1024#Mary-GG-%F0%9F%87%B3%F0%9F%87%B1',
      'vless://67eeadc9-0f75-4aed-a581-a786b54ab363@bama.ir:443?encryption=none&security=tls&alpn=h3%2Ch2%2Chttp%2F1.1&fp=chrome&type=ws&host=mana-c9ff40cdb8-hesam.apps.ir-thr-ba1.arvancaas.ir&path=%2Flasso%40Arezoo_tk%2F%3Fed%3D2048&sni=mana-c9ff40cdb8-hesam.apps.ir-thr-ba1.arvancaas.ir#Maryam-NimV.4-%F0%9F%87%AE%F0%9F%87%B7%F0%9F%87%B3%F0%9F%87%B1',

    ];
  } else if (provider === "Nazi-20") {
    links = [ 
      'vless://3527c909-aaea-43ff-bf4d-00200f368265@cdnjs.com:443?encryption=none&security=tls&sni=all-ws.sinasv.ir&alpn=h2%2Chttp%2F1.1&fp=chrome&type=ws&host=all-ws.sinasv.ir&path=%2Flasso%2F%3Fed%3D1024#Nazi-WS-%F0%9F%87%B8%F0%9F%87%AA',
      'vless://c4b89b6e-2f2c-4f75-a579-a843c0b10def@openai.com:443?encryption=none&security=tls&sni=all-grp.sinasv.ir&alpn=h2%2Chttp%2F1.1&fp=chrome&type=grpc&host=all-grp.sinasv.ir&serviceName=lasso3&mode=gun#Nazi-gRPC-%F0%9F%87%B8%F0%9F%87%AA',
      'vless://52c2899c-e5f6-453f-8202-787b18ca9f29@speedtestnet.mohombi.ir:443?encryption=none&security=tls&sni=all-ws.sbgzagros.ir&alpn=h2%2Chttp%2F1.1&fp=chrome&type=ws&host=all-ws.sbgzagros.ir&path=%2Flasso%40Arezoo_tk%2F%3Fed%3D2048#Nazi-WS-%F0%9F%87%B3%F0%9F%87%B1',
      'vless://030489eb-fbcc-4b12-af8d-0ddb2054617f@spark-stg.partnersonline.com:443?encryption=none&security=tls&sni=sine85.com&alpn=h3%2Ch2%2Chttp%2F1.1&fp=chrome&allowInsecure=1&type=ws&host=sine85.com&path=%2Fsineh%4085_saroon%2F%3Fed%3D1024#Nazi-Fastly-%F0%9F%87%B3%F0%9F%87%B1',
	  'trojan://Mdc2dxRsnk@81.28.12.12:443?security=tls&alpn=h3%2Ch2%2Chttp%2F1.1&fp=chrome&allowInsecure=1&type=ws&host=speedtest-gcr.zagrost.ir&path=%2FSolana_shir%40nadare%2F%3Fed%3D1024#Nazi-GG-%F0%9F%87%B3%F0%9F%87%B1',
      'vless://52c2899c-e5f6-453f-8202-787b18ca9f29@bama.ir:443?encryption=none&security=tls&alpn=h3%2Ch2%2Chttp%2F1.1&fp=chrome&type=ws&host=mana-c9ff40cdb8-hesam.apps.ir-thr-ba1.arvancaas.ir&path=%2Flasso%40Arezoo_tk%2F%3Fed%3D2048&sni=mana-c9ff40cdb8-hesam.apps.ir-thr-ba1.arvancaas.ir#Nazi-NimV.4-%F0%9F%87%AE%F0%9F%87%B7%F0%9F%87%B3%F0%9F%87%B1'

    ];
  } else if (provider === "Zagros-50") {
    links = [
      'trojan://s1NMpsElSM@heat-shockprotein.com:443?security=tls&sni=heat-shockprotein.com&alpn=h3%2Ch2%2Chttp%2F1.1&fp=chrome&type=ws&host=all-gcore-01.sinasv.ir&path=%2Ftroma#Zagros-Gcore-%F0%9F%87%B8%F0%9F%87%AA',
      'vless://129d2002-8cf4-4b4f-84b2-6609b3fd44c1@speedtestnet.mohombi.ir:443?encryption=none&security=tls&sni=all-grp-2.sbgzagros.ir&alpn=h2%2Chttp%2F1.1&fp=chrome&type=grpc&serviceName=lasso3&mode=gun#Zagros-gRPC-%F0%9F%87%B8%F0%9F%87%AA',
      'vless://563f8890-e0de-4639-8d1a-5f0cba47d6d7@openai.com:443?encryption=none&security=tls&sni=all-ws.sinasv.ir&alpn=h2%2Chttp%2F1.1&fp=chrome&type=ws&host=all-ws.sinasv.ir&path=%2Flasso%2F%3Fed%3D1024#Zagros-WS-%F0%9F%87%B8%F0%9F%87%AA',
      'vless://c338ef6f-dd1a-4f8a-e6a9-12403c9117ea@speedtestnet.mohombi.ir:443?encryption=none&security=tls&sni=all-ws.sbgzagros.ir&alpn=h2%2Chttp%2F1.1&fp=chrome&type=ws&host=all-ws.sbgzagros.ir&path=%2Flasso%40Arezoo_tk%2F%3Fed%3D2048#Zagros-WS-%F0%9F%87%B3%F0%9F%87%B1',
      'vless://f0c7666e-6aae-4900-81a6-b3f04fb2167c@speedtestnet.mohombi.ir:443?type=grpc&serviceName=lasso3&security=tls&fp=chrome&alpn=h2%2Chttp%2F1.1&allowInsecure=1&sni=all-grp.sbgzagros.ir#Zagros-gRPC-%F0%9F%87%B3%F0%9F%87%B1'
    ];
  } else if (provider === "Venus-18") {
    links = [
      'vless://8670590a-4520-4f66-bec3-c76ac430ea3c@cdnjs.com:443?encryption=none&security=tls&sni=all-ws.sinasv.ir&alpn=h2%2Chttp%2F1.1&fp=chrome&type=ws&host=all-ws.sinasv.ir&path=%2Flasso%2F%3Fed%3D1024#Venus-WS-%F0%9F%87%B8%F0%9F%87%AA',
      'vless://926be250-b97b-467b-8492-ba1b5c3958c1@speedtestnet.mohombi.ir:443?encryption=none&security=tls&sni=all-grp.sinasv.ir&alpn=h2%2Chttp%2F1.1&fp=chrome&type=grpc&host=all-grp.sinasv.ir&serviceName=lasso3&mode=gun#Venus-gRPC-%F0%9F%87%B8%F0%9F%87%AA',
      'vless://0a32b895-7708-486b-c201-11157f51380a@speedtestnet.mohombi.ir:443?encryption=none&security=tls&sni=all-ws.sbgzagros.ir&alpn=h2%2Chttp%2F1.1&fp=chrome&type=ws&host=all-ws.sbgzagros.ir&path=%2Flasso%40Arezoo_tk%2F%3Fed%3D2048#Venus-WS-%F0%9F%87%B3%F0%9F%87%B1',
      'vless://459ed38d-20b2-4996-901a-7eda216b9058@spark-stg.partnersonline.com:443?encryption=none&security=tls&sni=sine85.com&alpn=h3%2Ch2%2Chttp%2F1.1&fp=chrome&allowInsecure=1&type=ws&host=sine85.com&path=%2Fsineh%4085_saroon%2F%3Fed%3D1024#Venus-Fastly-%F0%9F%87%B3%F0%9F%87%B1',
	  'trojan://Rw7SaAVeTf@81.28.12.12:443?security=tls&alpn=h3%2Ch2%2Chttp%2F1.1&fp=chrome&allowInsecure=1&type=ws&host=speedtest-gcr.zagrost.ir&path=%2FSolana_shir%40nadare%2F%3Fed%3D1024#Venus-GG-%F0%9F%87%B3%F0%9F%87%B1',
      'vless://0a32b895-7708-486b-c201-11157f51380a@bama.ir:443?encryption=none&security=tls&alpn=h3%2Ch2%2Chttp%2F1.1&fp=chrome&type=ws&host=mana-c9ff40cdb8-hesam.apps.ir-thr-ba1.arvancaas.ir&path=%2Flasso%40Arezoo_tk%2F%3Fed%3D2048&sni=mana-c9ff40cdb8-hesam.apps.ir-thr-ba1.arvancaas.ir#Venus-NimV.4-%F0%9F%87%AE%F0%9F%87%B7%F0%9F%87%B3%F0%9F%87%B1'
      

    ];
  } else if (provider === "Negar-04") {
    links = [     
      'vless://8336e199-25ac-4390-8c7f-a374f1445d5a@cdnjs.com:443?encryption=none&security=tls&sni=all-ws.sinasv.ir&alpn=h2%2Chttp%2F1.1&fp=chrome&type=ws&host=all-ws.sinasv.ir&path=%2Flasso%2F%3Fed%3D1024#Negar-WS-%F0%9F%87%B8%F0%9F%87%AA',
      'vless://78fd010e-2329-4f1a-b261-e016f3ba5f85@openai.com:443?encryption=none&security=tls&sni=all-grp.sinasv.ir&alpn=h2%2Chttp%2F1.1&fp=chrome&type=grpc&host=all-grp.sinasv.ir&serviceName=lasso3&mode=gun#Negar-gRPC-%F0%9F%87%B8%F0%9F%87%AA',
      'vless://0f4cabd8-3ef0-4786-fed6-feb043f3e173@speedtestnet.mohombi.ir:443?encryption=none&security=tls&sni=all-ws.sbgzagros.ir&alpn=h2%2Chttp%2F1.1&fp=chrome&type=ws&host=all-ws.sbgzagros.ir&path=%2Flasso%40Arezoo_tk%2F%3Fed%3D2048#Negar-WS-%F0%9F%87%B3%F0%9F%87%B1',
      'vless://a4460329-0338-4ef8-fe43-218b925ff0a2@spark-stg.partnersonline.com:443?encryption=none&security=tls&sni=sine85.com&alpn=h3%2Ch2%2Chttp%2F1.1&fp=chrome&allowInsecure=1&type=ws&host=sine85.com&path=%2Fsineh%4085_saroon%2F%3Fed%3D1024#Negar-Fastly-%F0%9F%87%B3%F0%9F%87%B1',
	  'trojan://1TcdX4lpbO@81.28.12.12:443?security=tls&alpn=h3%2Ch2%2Chttp%2F1.1&fp=chrome&allowInsecure=1&type=ws&host=speedtest-gcr.zagrost.ir&path=%2FSolana_shir%40nadare%2F%3Fed%3D1024#Negar-GG-%F0%9F%87%B3%F0%9F%87%B1',
      'vless://0f4cabd8-3ef0-4786-fed6-feb043f3e173@bama.ir:443?encryption=none&security=tls&alpn=h3%2Ch2%2Chttp%2F1.1&fp=chrome&type=ws&host=mana-c9ff40cdb8-hesam.apps.ir-thr-ba1.arvancaas.ir&path=%2Flasso%40Arezoo_tk%2F%3Fed%3D2048&sni=mana-c9ff40cdb8-hesam.apps.ir-thr-ba1.arvancaas.ir#Negar-NimV.4-%F0%9F%87%AE%F0%9F%87%B7%F0%9F%87%B3%F0%9F%87%B1'
    ];

  } else if (provider === "Javad-25") {
    links = [
      'vless://5894a07f-d4e6-4db0-a79d-ddf39787c2fd@cdnjs.com:443?encryption=none&security=tls&sni=all-grp-2.sbgzagros.ir&alpn=h2%2Chttp%2F1.1&fp=chrome&type=grpc&serviceName=lasso3&mode=gun#Javad-gRPC-%F0%9F%87%B8%F0%9F%87%AA',
      'vless://3657f788-051b-4004-91fc-7657567e6e99@openai.com:443?encryption=none&security=tls&sni=all-ws.sinasv.ir&alpn=h2%2Chttp%2F1.1&fp=chrome&type=ws&host=all-ws.sinasv.ir&path=%2Flasso%2F%3Fed%3D1024#Javad-WS-%F0%9F%87%B8%F0%9F%87%AA',
      'vless://8cd74fab-6a8f-4db2-8ec5-c5442f2c7dee@speedtestnet.mohombi.ir:443?encryption=none&security=tls&sni=all-ws.sbgzagros.ir&alpn=h2%2Chttp%2F1.1&fp=chrome&type=ws&host=all-ws.sbgzagros.ir&path=%2Flasso%40Arezoo_tk%2F%3Fed%3D2048#Javad-WS-%F0%9F%87%B3%F0%9F%87%B1',
      'vless://79802864-5b5e-4cbc-8a00-2265eb1de62f@spark-stg.partnersonline.com:443?encryption=none&security=tls&sni=sine85.com&alpn=h3%2Ch2%2Chttp%2F1.1&fp=chrome&allowInsecure=1&type=ws&host=sine85.com&path=%2Fsineh%4085_saroon%2F%3Fed%3D1024#Javad-Fastly-%F0%9F%87%B3%F0%9F%87%B1',
	  'trojan://OeK1GELJ7x@81.28.12.12:443?security=tls&alpn=h3%2Ch2%2Chttp%2F1.1&fp=chrome&allowInsecure=1&type=ws&host=speedtest-gcr.zagrost.ir&path=%2FSolana_shir%40nadare%2F%3Fed%3D1024#Javad-GG-%F0%9F%87%B3%F0%9F%87%B1',
      'vless://8cd74fab-6a8f-4db2-8ec5-c5442f2c7dee@bama.ir:443?encryption=none&security=tls&alpn=h3%2Ch2%2Chttp%2F1.1&fp=chrome&type=ws&host=mana-c9ff40cdb8-hesam.apps.ir-thr-ba1.arvancaas.ir&path=%2Flasso%40Arezoo_tk%2F%3Fed%3D2048&sni=mana-c9ff40cdb8-hesam.apps.ir-thr-ba1.arvancaas.ir#Javad-NimV.4-%F0%9F%87%AE%F0%9F%87%B7%F0%9F%87%B3%F0%9F%87%B1'
	  
    ];

  } else if (provider === "Niloo-85") {
    links = [
      'vless://177b5851-2e16-4a12-b2bb-b20b34c708c3@cdnjs.com:443?encryption=none&security=tls&sni=all-ws.sinasv.ir&alpn=h2%2Chttp%2F1.1&fp=chrome&type=ws&host=all-ws.sinasv.ir&path=%2Flasso%2F%3Fed%3D1024#Niloo-WS-%F0%9F%87%B8%F0%9F%87%AA',
      'vless://66dd601b-5901-401b-bee3-3ed36035e64f@openai.com:443?encryption=none&security=tls&sni=all-grp.sinasv.ir&alpn=h2%2Chttp%2F1.1&fp=chrome&type=grpc&serviceName=lasso3&mode=gun#Niloo-gRPC-%F0%9F%87%B8%F0%9F%87%AA',
      'vless://726b10b9-c72e-4c2d-a56e-1095763b21c3@speedtestnet.mohombi.ir:443?encryption=none&security=tls&sni=all-ws.sbgzagros.ir&alpn=h2%2Chttp%2F1.1&fp=chrome&type=ws&host=all-ws.sbgzagros.ir&path=%2Flasso%40Arezoo_tk%2F%3Fed%3D2048#Niloo-WS-%F0%9F%87%B3%F0%9F%87%B1',
      'vless://d42516c4-97b0-4d9a-932c-169277ca5cef@spark-stg.partnersonline.com:443?encryption=none&security=tls&sni=sine85.com&alpn=h3%2Ch2%2Chttp%2F1.1&fp=chrome&allowInsecure=1&type=ws&host=sine85.com&path=%2Fsineh%4085_saroon%2F%3Fed%3D1024#Niloo-Fastly-%F0%9F%87%B3%F0%9F%87%B1',	  
	  'trojan://CJCF16EFxN@81.28.12.12:443?security=tls&alpn=h3%2Ch2%2Chttp%2F1.1&fp=chrome&allowInsecure=1&type=ws&host=speedtest-gcr.zagrost.ir&path=%2FSolana_shir%40nadare%2F%3Fed%3D1024#Niloo-GG-%F0%9F%87%B3%F0%9F%87%B1',
      'vless://726b10b9-c72e-4c2d-a56e-1095763b21c3@bama.ir:443?encryption=none&security=tls&alpn=h3%2Ch2%2Chttp%2F1.1&fp=chrome&type=ws&host=mana-c9ff40cdb8-hesam.apps.ir-thr-ba1.arvancaas.ir&path=%2Flasso%40Arezoo_tk%2F%3Fed%3D2048&sni=mana-c9ff40cdb8-hesam.apps.ir-thr-ba1.arvancaas.ir#Niloo-NimV.4-%F0%9F%87%AE%F0%9F%87%B7%F0%9F%87%B3%F0%9F%87%B1'
    ];

  } else if (provider === "Mehdi-13") {
    links = [,      
      'vless://387720f2-c23c-4906-ad01-bbaeb1264558@cdnjs.com:443?encryption=none&security=tls&sni=all-grp.sinasv.ir&alpn=h2%2Chttp%2F1.1&fp=chrome&type=grpc&serviceName=lasso3&mode=gun#Mehdi-gRPC-%F0%9F%87%B8%F0%9F%87%AA',
      'vless://430dc4b1-2acb-4934-b9ff-909fc9a068eb@openai.com:443?encryption=none&security=tls&sni=all-ws.sinasv.ir&alpn=h2%2Chttp%2F1.1&fp=chrome&type=ws&host=all-ws.sinasv.ir&path=%2Flasso%2F%3Fed%3D1024#Mehdi-WS-%F0%9F%87%B8%F0%9F%87%AA',
      'vless://72cc8b6e-c8d7-4f11-a964-6092e6a8de1a@speedtestnet.mohombi.ir:443?encryption=none&security=tls&sni=all-ws.sbgzagros.ir&alpn=h2%2Chttp%2F1.1&fp=chrome&type=ws&host=all-ws.sbgzagros.ir&path=%2Flasso%40Arezoo_tk%2F%3Fed%3D2048#Mehdi-WS-%F0%9F%87%B3%F0%9F%87%B1',
      'vless://12ad72c0-cdb3-4950-8803-48c55387f855@spark-stg.partnersonline.com:443?encryption=none&security=tls&sni=sine85.com&alpn=h3%2Ch2%2Chttp%2F1.1&fp=chrome&allowInsecure=1&type=ws&host=sine85.com&path=%2Fsineh%4085_saroon%2F%3Fed%3D1024#Mehdi-Fastly-%F0%9F%87%B3%F0%9F%87%B1',
	  'trojan://cYMFoI0Ft2@81.28.12.12:443?security=tls&alpn=h3%2Ch2%2Chttp%2F1.1&fp=chrome&allowInsecure=1&type=ws&host=speedtest-gcr.zagrost.ir&path=%2FSolana_shir%40nadare%2F%3Fed%3D1024#Mehdi-GG-%F0%9F%87%B3%F0%9F%87%B1',
      'vless://72cc8b6e-c8d7-4f11-a964-6092e6a8de1a@bama.ir:443?encryption=none&security=tls&alpn=h3%2Ch2%2Chttp%2F1.1&fp=chrome&type=ws&host=mana-c9ff40cdb8-hesam.apps.ir-thr-ba1.arvancaas.ir&path=%2Flasso%40Arezoo_tk%2F%3Fed%3D2048&sni=mana-c9ff40cdb8-hesam.apps.ir-thr-ba1.arvancaas.ir#Mehdi-NimV.4-%F0%9F%87%AE%F0%9F%87%B7%F0%9F%87%B3%F0%9F%87%B1'
    ];

  } else if (provider === "Sasan-10") {
    links = [      
      'vless://430e3f49-0813-4d89-aa5a-1764e435f308@cdnjs.com:443?encryption=none&security=tls&sni=all-ws.sinasv.ir&alpn=h2%2Chttp%2F1.1&fp=chrome&type=ws&host=all-ws.sinasv.ir&path=%2Flasso%2F%3Fed%3D1024#Sasan-WS-%F0%9F%87%B8%F0%9F%87%AA',
      'vless://7edf7e7d-6f99-458e-a5c6-bed272a16838@openai.com:443?encryption=none&security=tls&sni=all-grp.sinasv.ir&alpn=h2%2Chttp%2F1.1&fp=chrome&type=grpc&serviceName=lasso3&mode=gun#Sasan-gRPC-%F0%9F%87%B8%F0%9F%87%AA',
      'vless://9748767e-6109-4f08-a9c7-852d08a152c6@speedtestnet.mohombi.ir:443?encryption=none&security=tls&sni=all-ws.sbgzagros.ir&alpn=h2%2Chttp%2F1.1&fp=chrome&type=ws&host=all-ws.sbgzagros.ir&path=%2Flasso%40Arezoo_tk%2F%3Fed%3D2048#Sasan-WS-%F0%9F%87%B3%F0%9F%87%B1',
      'vless://2d2b01ac-22be-4bd6-fc56-f060b1ed125e@speedtest.net:443?encryption=none&security=tls&sni=speedtest.net&alpn=h3%2Ch2%2Chttp%2F1.1&fp=chrome&allowInsecure=1&type=ws&host=sine85.com&path=%2Fsineh%4085_saroon%2F%3Fed%3D1024#Sasan-Fastly-%F0%9F%87%B3%F0%9F%87%B1',
	  'trojan://k3gaH8qIjK@81.28.12.12:443?security=tls&alpn=h3%2Ch2%2Chttp%2F1.1&fp=chrome&allowInsecure=1&type=ws&host=speedtest-gcr.zagrost.ir&path=%2FSolana_shir%40nadare%2F%3Fed%3D1024#Sasan-GG-%F0%9F%87%B3%F0%9F%87%B1',
      'vless://9748767e-6109-4f08-a9c7-852d08a152c6@bama.ir:443?encryption=none&security=tls&alpn=h3%2Ch2%2Chttp%2F1.1&fp=chrome&type=ws&host=mana-c9ff40cdb8-hesam.apps.ir-thr-ba1.arvancaas.ir&path=%2Flasso%40Arezoo_tk%2F%3Fed%3D2048&sni=mana-c9ff40cdb8-hesam.apps.ir-thr-ba1.arvancaas.ir#Sasan-NimV.4-%F0%9F%87%AE%F0%9F%87%B7%F0%9F%87%B3%F0%9F%87%B1'
	  
	  
    ];

  } else if (provider === "Ramin-16") {
    links = [ 
      'vless://54e8452e-937c-448e-b581-12fa9087d9cc@cdnjs.com:443?encryption=none&security=tls&sni=all-ws.sinasv.ir&alpn=h2%2Chttp%2F1.1&fp=chrome&type=ws&host=all-ws.sinasv.ir&path=%2Flasso%2F%3Fed%3D1024#Ramin-WS-%F0%9F%87%B8%F0%9F%87%AA',
      'vless://175e9c93-dc9c-4a50-b08e-412c4538a43c@openai.com:443?encryption=none&security=tls&sni=all-grp.sinasv.ir&alpn=h2%2Chttp%2F1.1&fp=chrome&type=grpc&serviceName=lasso3&mode=gun#Ramin-gRPC-%F0%9F%87%B8%F0%9F%87%AA',
      'vless://2421d3af-aa0e-4069-9e83-651e068813a2@speedtestnet.mohombi.ir:443?encryption=none&security=tls&sni=all-ws.sbgzagros.ir&alpn=h2%2Chttp%2F1.1&fp=chrome&type=ws&host=all-ws.sbgzagros.ir&path=%2Flasso%40Arezoo_tk%2F%3Fed%3D2048#Ramin-WS-%F0%9F%87%B3%F0%9F%87%B1',
	  'vless://af9ea0d7-688b-4f2b-e306-cf6e05ba66de@spark-stg.partnersonline.com:443?encryption=none&security=tls&sni=sine85.com&alpn=h3%2Ch2%2Chttp%2F1.1&fp=chrome&allowInsecure=1&type=ws&host=sine85.com&path=%2Fsineh%4085_saroon%2F%3Fed%3D1024#Ramin-Fastly-%F0%9F%87%B3%F0%9F%87%B1',
	  'trojan://wcFsxkDEXS@81.28.12.12:443?security=tls&alpn=h3%2Ch2%2Chttp%2F1.1&fp=chrome&allowInsecure=1&type=ws&host=speedtest-gcr.zagrost.ir&path=%2FSolana_shir%40nadare%2F%3Fed%3D1024#Ramin-GG-%F0%9F%87%B3%F0%9F%87%B1',
      'vless://2421d3af-aa0e-4069-9e83-651e068813a2@bama.ir:443?encryption=none&security=tls&alpn=h3%2Ch2%2Chttp%2F1.1&fp=chrome&type=ws&host=mana-c9ff40cdb8-hesam.apps.ir-thr-ba1.arvancaas.ir&path=%2Flasso%40Arezoo_tk%2F%3Fed%3D2048&sni=mana-c9ff40cdb8-hesam.apps.ir-thr-ba1.arvancaas.ir#Ramin-NimV.4-%F0%9F%87%AE%F0%9F%87%B7%F0%9F%87%B3%F0%9F%87%B1'

    ];

  } else if (provider === "Armen-40") {
    links = [
      'vless://1386b7d5-237e-46c6-b52d-3881cac68f11@cdnjs.com:443?encryption=none&security=tls&sni=all-ws.sinasv.ir&alpn=h2%2Chttp%2F1.1&fp=chrome&type=ws&host=all-ws.sinasv.ir&path=%2Flasso%2F%3Fed%3D1024#Armen-WS-%F0%9F%87%B8%F0%9F%87%AA',
      'vless://73a1618b-75fb-4590-9670-43ffae6fb575@openai.com:443?encryption=none&security=tls&sni=all-grp.sinasv.ir&alpn=h2%2Chttp%2F1.1&fp=chrome&type=grpc&serviceName=lasso3&mode=gun#Armen-gRPC-%F0%9F%87%B8%F0%9F%87%AA',
      'vless://19938d7a-b55b-4fc0-c3c6-29ef79b3d5e0@speedtestnet.mohombi.ir:443?encryption=none&security=tls&sni=all-ws.sbgzagros.ir&alpn=h2%2Chttp%2F1.1&fp=chrome&type=ws&host=all-ws.sbgzagros.ir&path=%2Flasso%40Arezoo_tk%2F%3Fed%3D20482Flasso#Armen-WS-%F0%9F%87%B3%F0%9F%87%B1',
	   'vless://19938d7a-b55b-4fc0-c3c6-29ef79b3d5e0@rithl.mohombi.ir:443?encryption=none&security=tls&sni=all-ws.sbgzagros.ir&alpn=h2%2Chttp%2F1.1&fp=chrome&type=ws&host=all-ws.sbgzagros.ir&path=%2Flasso%40Arezoo_tk%2F%3Fed%3D2048#Armen-Rightel-%F0%9F%87%B3%F0%9F%87%B1',
	  'vless://19938d7a-b55b-4fc0-c3c6-29ef79b3d5e0@all.mohombi.ir:443?encryption=none&security=tls&sni=all-ws.sbgzagros.ir&alpn=h2%2Chttp%2F1.1&fp=chrome&type=ws&host=all-ws.sbgzagros.ir&path=%2Flasso%40Arezoo_tk%2F%3Fed%3D2048#Armen-Irancell-%F0%9F%87%B3%F0%9F%87%B1',
      'trojan://3BSiPn7n3q@heat-shockprotein.com:443?security=tls&sni=heat-shockprotein.com&alpn=h3%2Ch2%2Chttp%2F1.1&fp=chrome&type=ws&host=all-gcore-01.sinasv.ir&path=%2Ftroma#Armen-Gcore-%F0%9F%87%B8%F0%9F%87%AA'
    ];

  } else if (provider === "Olivia-100") {
    links = [
      'vless://469f888a-e096-4945-9530-b871649bc5ac@cdnjs.com:443?encryption=none&security=tls&sni=all-ws.sinasv.ir&alpn=h2%2Chttp%2F1.1&fp=chrome&type=ws&host=all-ws.sinasv.ir&path=%2Flasso%2F%3Fed%3D1024#Olivia-WS-%F0%9F%87%B8%F0%9F%87%AA',
      'vless://29528cb0-bcb5-43df-bd50-0dc69d42ab0e@openai.com:443?encryption=none&security=tls&sni=all-grp.sinasv.ir&alpn=h2%2Chttp%2F1.1&fp=chrome&type=grpc&serviceName=lasso3&mode=gun#Olivia-gRPC-%F0%9F%87%B8%F0%9F%87%AA',
      'vless://04f30236-6be0-4a3b-b94c-f3eb0b6ad523@speedtestnet.mohombi.ir:443?encryption=none&security=tls&sni=all-ws.sbgzagros.ir&alpn=h2%2Chttp%2F1.1&fp=chrome&type=ws&host=all-ws.sbgzagros.ir&path=%2Flasso%40Arezoo_tk%2F%3Fed%3D2048#Olivia-WS-%F0%9F%87%B3%F0%9F%87%B1',
      'vless://b3ce6f41-44cf-4347-e9a3-6aece256ef83@speedtestnet.mohombi.ir:443?encryption=none&security=tls&sni=all-grp.sbgzagros.ir&alpn=h2%2Chttp%2F1.1&fp=chrome&type=grpc&serviceName=lasso3&mode=gun#Olivia-gRPC-%F0%9F%87%B3%F0%9F%87%B1',
      'trojan://320v4oph1b@heat-shockprotein.com:443?security=tls&sni=heat-shockprotein.com&alpn=h3%2Ch2%2Chttp%2F1.1&fp=chrome&type=ws&host=all-gcore-01.sinasv.ir&path=%2Ftroma#Olivia-Gcore-%F0%9F%87%B8%F0%9F%87%AA',
      'vless://04f30236-6be0-4a3b-b94c-f3eb0b6ad523@bama.ir:443?encryption=none&security=tls&alpn=h3%2Ch2%2Chttp%2F1.1&fp=chrome&type=ws&host=mana-c9ff40cdb8-hesam.apps.ir-thr-ba1.arvancaas.ir&path=%2Flasso%40Arezoo_tk%2F%3Fed%3D2048&sni=mana-c9ff40cdb8-hesam.apps.ir-thr-ba1.arvancaas.ir#Forooshgah-NimV.4-%F0%9F%87%AE%F0%9F%87%B7%F0%9F%87%B3%F0%9F%87%B1'

    ];

  } else if (provider === "Milad-101") {
    links = [
      'vless://4a92b5bd-ccf2-4bf5-86f3-151a50a0611b@cdnjs.com:443?encryption=none&security=tls&sni=all-ws.sinasv.ir&alpn=h2%2Chttp%2F1.1&fp=chrome&type=ws&host=all-ws.sinasv.ir&path=%2Flasso%2F%3Fed%3D1024#Milad-WS-%F0%9F%87%B8%F0%9F%87%AA',
      'vless://ef6c425d-b89d-4700-aea3-650223a61042@openai.com:443?encryption=none&security=tls&sni=all-grp.sinasv.ir&alpn=h2%2Chttp%2F1.1&fp=chrome&type=grpc&serviceName=lasso3&mode=gun#Milad-gRPC-%F0%9F%87%B8%F0%9F%87%AA',
      'vless://9b61b66f-a332-45b9-8640-eff86a6f19a6@speedtestnet.mohombi.ir:443?encryption=none&security=tls&sni=all-ws.sbgzagros.ir&alpn=h2%2Chttp%2F1.1&fp=chrome&type=ws&host=all-ws.sbgzagros.ir&path=%2Flasso%40Arezoo_tk%2F%3Fed%3D2048#Milad-WS-%F0%9F%87%B3%F0%9F%87%B1',
      'vless://5575f28e-25f6-4f0d-fa58-7d62980a31f1@speedtestnet.mohombi.ir:443?encryption=none&security=tls&sni=all-grp.sbgzagros.ir&alpn=h2%2Chttp%2F1.1&fp=chrome&type=grpc&serviceName=lasso3&mode=gun#Milad-gRPC-%F0%9F%87%B3%F0%9F%87%B1',
      'trojan://HvjXVf33xI@81.28.12.12:443?security=tls&alpn=h3%2Ch2%2Chttp%2F1.1&fp=chrome&allowInsecure=1&type=ws&host=speedtest-gcr.zagrost.ir&path=%2FSolana_shir%40nadare%2F%3Fed%3D1024#Milad-GG-%F0%9F%87%B3%F0%9F%87%B1'
    ];

  } else if (provider === "Ahvali-300") {
    links = [
      'trojan://y7pU3LCTcL@heat-shockprotein.com:443?security=tls&sni=heat-shockprotein.com&alpn=h3%2Ch2%2Chttp%2F1.1&fp=chrome&type=ws&host=all-gcore-01.sinasv.ir&path=%2Ftroma#Ahvali-Gcore-%F0%9F%87%B8%F0%9F%87%AA',
      'vless://a39ee463-e3c3-4cf3-9284-4804d9368a84@speedtestnet.mohombi.ir:443?encryption=none&security=tls&sni=all-grp-2.sbgzagros.ir&alpn=h2%2Chttp%2F1.1&fp=chrome&type=grpc&authority=&serviceName=lasso3&mode=gun#Ahvali-gRPC-%F0%9F%87%B8%F0%9F%87%AA',
      'vless://49e1fdec-837b-40ba-8b0a-9aa60b69f2b8@openai.com:443?encryption=none&security=tls&alpn=h2%2Chttp%2F1.1&fp=chrome&type=ws&host=all-ws.sinasv.ir&path=%2Flasso%2F%3Fed%3D1024#Ahvali-WS-%F0%9F%87%B8%F0%9F%87%AA',
      'vless://0820382c-eb9a-4edd-b995-c2f922cd5eba@cdnjs.com:443?encryption=none&security=tls&sni=all-ws.sbgzagros.ir&alpn=h2%2Chttp%2F1.1&fp=chrome&type=ws&host=all-ws.sbgzagros.ir&path=%2Flasso%40Arezoo_tk%2F%3Fed%3D2048#Ahvali-WS-%F0%9F%87%B3%F0%9F%87%B1',
      'vless://d4338a55-0965-443b-8d25-cba2adfce984@speedtestnet.mohombi.ir:443?encryption=none&security=tls&sni=all-grp.sbgzagros.ir&alpn=h2%2Chttp%2F1.1&fp=chrome&type=grpc&authority=&serviceName=lasso3&mode=gun#Ahvali-gRPC-%F0%9F%87%B3%F0%9F%87%B1'

    ];

  } else if (provider === "Mahdis-20") {
    links = [
      'vless://e683623d-8f8b-4cf4-8b95-660a5e8fbf6d@speedtestnet.mohombi.ir:443?encryption=none&security=tls&sni=all-ws.sinasv.ir&alpn=h2%2Chttp%2F1.1&fp=chrome&type=ws&host=all-ws.sinasv.ir&path=%2Flasso%2F%3Fed%3D1024#Mahdis-WS-%F0%9F%87%B8%F0%9F%87%AA',
      'vless://dab5831f-1be8-4d8a-9a4a-4fb1bdf17a65@cdnjs.com:443?encryption=none&security=tls&sni=all-grp.sinasv.ir&alpn=h2%2Chttp%2F1.1&fp=chrome&type=grpc&authority=&serviceName=lasso3&mode=gun#Mahdis-gRPC-%F0%9F%87%B8%F0%9F%87%AA',
      'vless://0f8fce92-8ad9-4fb4-c0f8-9d454a641ad8@speedtestnet.mohombi.ir:443?encryption=none&security=tls&sni=all-ws.sbgzagros.ir&alpn=h2%2Chttp%2F1.1&fp=chrome&type=ws&host=all-ws.sbgzagros.ir&path=%2Flasso%40Arezoo_tk%2F%3Fed%3D2048#Mahdis-WS-%F0%9F%87%B3%F0%9F%87%B1',
      'vless://1302feed-40d5-4e81-8592-7af3d8570bca@speedtestnet.mohombi.ir:443?encryption=none&security=tls&sni=all-grp.sbgzagros.ir&alpn=h2%2Chttp%2F1.1&fp=chrome&type=grpc&authority=&serviceName=lasso3&mode=gun#Mahdis-gRPC-%F0%9F%87%B3%F0%9F%87%B1',
      'vless://0f8fce92-8ad9-4fb4-c0f8-9d454a641ad8@bama.ir:443?encryption=none&security=tls&alpn=h3%2Ch2%2Chttp%2F1.1&fp=chrome&type=ws&host=mana-c9ff40cdb8-hesam.apps.ir-thr-ba1.arvancaas.ir&path=%2Flasso%40Arezoo_tk%2F%3Fed%3D2048&sni=mana-c9ff40cdb8-hesam.apps.ir-thr-ba1.arvancaas.ir#Mahdis-NimV.4-%F0%9F%87%AE%F0%9F%87%B7%F0%9F%87%B3%F0%9F%87%B1'

    ];

  } 

  // افزودن لینک‌های عمومی به لینک‌های اختصاصی
  links = [...links, ...generalLinks];

  const responseText = links.join('\n').replace(/,(?=\n|$)/g, '');
  const encodedResponse = btoa(responseText);

  return new Response(encodedResponse, {
    headers: {
      'Content-Type': 'text/plain'
    },
  });
}

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});
