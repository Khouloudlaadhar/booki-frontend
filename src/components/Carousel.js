import React from 'react';
import { CDBCarousel, CDBCarouselItem, CDBCarouselInner, CDBView, CDBContainer } from 'cdbreact';

export const Carousel = () => {
  return (
    <CDBContainer className="mt-5 ">
      <CDBContainer>
        <CDBCarousel
          activeItem={1}
          length={4}
          showControls={true}
          showIndicators={true}
          className="z-depth-1"
          slide
        >
          <CDBCarouselInner>
            <CDBCarouselItem itemId="1">
              <CDBView>
                <img height={400}
                className="d-block w-100 " 
                src="https://image.resabooking.com/images/hotel/Le_Royal_Hammamet_.jpg" 
                alt="First slide" />
              </CDBView>
            </CDBCarouselItem>
            <CDBCarouselItem itemId="2">
              <CDBView>
                <img height={400}
                  className="d-block w-100 " 
                  src="https://1503846100.rsc.cdn77.org/photos/4556/Hotel-Steigenberger-Marhaba-Thalasso-Hammamet-Vue-Piscine3.jpg" 
                  alt="Second slide" />
              </CDBView>
            </CDBCarouselItem>
            <CDBCarouselItem itemId="3">
              <CDBView>
                <img height={400}
                className="d-block w-100 " 
                src="https://vive-media-tpvbooking.netdna-ssl.com/63482/0.jpg" 
                alt="Third slide" />
              </CDBView>
            </CDBCarouselItem>
            <CDBCarouselItem itemId="4">
              <CDBView>
                <img height={400}
                  className="d-block w-100 "
                  src="https://images.trvl-media.com/hotels/3000000/2240000/2239000/2238909/62b3f434.jpg?impolicy=resizecrop&rw=670&ra=fit"
                  alt="fourth slide" />
              </CDBView>
            </CDBCarouselItem>
          </CDBCarouselInner>
        </CDBCarousel>
      </CDBContainer>
    </CDBContainer>
  );
};