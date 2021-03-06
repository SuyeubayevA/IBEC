import React from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';

export const MapsPage: React.FC  = () => {
     const mapData = {
         center:[43.250908, 76.947244],
         zoom: 13
     }

    return(
        <div  className="body-container-maps">
            <h1>Контакты: </h1>
            <YMaps>
                <div>
                    <Map defaultState={mapData} width='100%' height='700px'>
                            <Placemark 
                                geometry={[43.264165, 76.929910 ]} 
                                properties={{
                                    balloonContent: 'Mega Center Almaty',
                                    hintContent : 'Mega Center Almaty'
                                }}
                                modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}
                            />
                            <Placemark 
                                geometry={[43.230582, 76.945995]} 
                                options= {{preset :'islands#circleDotIcon'} }
                            />
                    </Map>
                </div>
            </YMaps>
        </div>
    )
}