import React from 'react';
import { CDBCarousel, CDBCarouselItem, CDBCarouselInner, CDBView, CDBContainer } from 'cdbreact';

export const Carousel = () => {
  return (
    <CDBContainer>
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
                <img className="d-block w-100 h-50" src="https://image.resabooking.com/images/hotel/Le_Royal_Hammamet_.jpg" alt="First slide" />
              </CDBView>
            </CDBCarouselItem>
            <CDBCarouselItem itemId="2">
              <CDBView>
                <img className="d-block w-100 h-50" src="https://image.resabooking.com/images/image_panoramique/El_Mouradi_Hammamet_2.jpg" alt="Second slide" />
              </CDBView>
            </CDBCarouselItem>
            <CDBCarouselItem itemId="3">
              <CDBView>
                <img className="d-block w-100 h-50" src="https://vive-media-tpvbooking.netdna-ssl.com/63482/0.jpg" alt="Third slide" />
              </CDBView>
            </CDBCarouselItem>
            <CDBCarouselItem itemId="4">
              <CDBView>
                <img className="d-block w-100 h-50" src="https://images.trvl-media.com/hotels/3000000/2240000/2239000/2238909/62b3f434.jpg?impolicy=resizecrop&rw=670&ra=fit" alt="Third slide" />
              </CDBView>
            </CDBCarouselItem>
          </CDBCarouselInner>
        </CDBCarousel>
      </CDBContainer>
    </CDBContainer>
  );
};