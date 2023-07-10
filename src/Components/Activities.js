import '../Styles/Activities.css';
import {userActivity} from '../Service/API.js';

const Activities = () => {
  return (
    <div className='activity'>
      <div className='activity-heading'>
        <span>Yesterday</span>
        <hr className='hr-line' />
      </div>
      <div class="timeline-container">
        <ul class="tl">
          {
            userActivity.map((ua) => (
              <li key={ua.id}>
                <div class="item-icon"></div>
                <div class="item-text">
                 {
                  ua.id === 1 &&
                  <span class="item-title">Visitor Left</span>
                 }
                 {
                  ua.id !== 1 && 
                  <div class="item-detail">{ua.visitlink}</div>
                 }
                  
                </div>
                <div class="item-timestamp">
                  {ua.visitdate}<br /> {ua.visitTime}
                </div>
              </li>
            ))
          }
        </ul>

      </div>

    </div>
  )
}

export default Activities