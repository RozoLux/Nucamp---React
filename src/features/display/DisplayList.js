import {Col, Row} from 'reactstrap';
//import DisplayCard from './DisplayCard';
import {selectFeaturedCampsite} from '../campsites/campsitesSlice';
import AnimatedDisplayCard from './AnimatedDisplayCard';
import { selectFeaturedPromotion } from '../promotions/promotionsSlice';
import { selectFeaturedPartner  } from '../partners/partnersSlice';

const DisplayLIst = () => {
  const items =[selectFeaturedCampsite(), selectFeaturedPromotion(), selectFeaturedPartner() ] ;

  return (
    <Row>
      {items.map((item,idx)=> {
        return (
          item && (
            <Col md className='m-1' key={idx}>
              <AnimatedDisplayCard item={item}/>
            </Col>
          )
        );
      })}
    </Row>
  );
};

export default DisplayLIst ;
