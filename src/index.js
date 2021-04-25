import React from 'react';
import ReactDOM from 'react-dom';

function Avatar(props) {
  return (
    <img className="Avatar" width="328" height="328"
      src={props.user.avatarUrl}
      alt={props.user.name}
    />
  );
}

function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar user={props.user} />
      <div className="UserInfo-name">
        {props.user.name}
      </div>
    </div>
  );
}

function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo user={props.author} />
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {props.date}
      </div>
    </div>
  );
}

const author = {
  avatarUrl: 'https://avatars.githubusercontent.com/u/47304380?v=4',
  name: 'István Lelkes'
};

const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque aliquet aliquet orci, ac lacinia turpis. Vivamus ac felis tellus. Donec laoreet fermentum interdum. In consectetur, velit at fringilla euismod, ex tortor dapibus enim, et finibus enim enim at nisi. In sed ornare nibh. Sed condimentum ipsum massa, ut consequat sem suscipit et. Phasellus vel leo a lectus sagittis convallis at sed augue. Etiam pretium sed quam non varius. Donec diam sem, cursus vitae velit sit amet, euismod feugiat lectus. Duis id hendrerit ante. Integer at feugiat est, sed ornare justo. Vestibulum commodo justo ac dictum gravida. Fusce imperdiet metus id nibh ullamcorper, tincidunt vehicula tortor facilisis. Quisque eu mi sit amet nibh pulvinar ultricies. Sed aliquam erat dignissim diam pretium blandit. Mauris non faucibus eros. Aliquam et enim neque. Vestibulum posuere dictum augue faucibus blandit. Quisque lobortis ante sit amet tellus imperdiet, porttitor hendrerit arcu finibus.';

ReactDOM.render(
  <React.StrictMode>
    <Comment author={author} text={text} date="2021-04-22" />
  </React.StrictMode>,
  document.getElementById('root')
);