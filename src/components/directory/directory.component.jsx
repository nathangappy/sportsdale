import React from 'react';

import DirectoryItem from '../directory-item/directory-item.component';

import './directory.styles.scss';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      teams: [
        {
          name: 'Calgary Flames',
          imageUrl: './imgs/flames/flames-logo.gif',
          id: 5,
          link: 'shop/flames'
        },
        {
          name: 'Edmonton Oilers',
          imageUrl: './imgs/oilers/oilers-logo.gif',
          id: 12,
          link: 'shop/oilers'
        },
        {
          name: 'Montreal Canadiens',
          imageUrl: './imgs/canadiens/habs-logo.gif',
          id: 16,
          link: 'shop/canadiens'
        },
        {
          name: 'Ottawa Senators',
          imageUrl: './imgs/senators/senators-logo.gif',
          id: 21,
          link: 'shop/senators'
        },
        {
          name: 'Toronto Maple Leafs',
          imageUrl: './imgs/leafs/leafs-logo.gif',
          id: 27,
          link: 'shop/leafs'
        },
        {
          name: 'Vancouver Canucks',
          imageUrl: './imgs/canucks/canucks-logo.gif',
          id: 28,
          link: 'shop/canucks'
        },
        {
          name: 'Winnipeg Jets',
          imageUrl: './imgs/jets/jets-logo.gif',
          id: 31,
          link: 'shop/jets'
        }
      ]
    };
  }
  render() {
    return (
      <div className="team-directory">
        {this.state.teams.map(({ name, imageUrl, id, link }) => (
          <DirectoryItem key={id} name={name} imageUrl={imageUrl} link={link} />
        ))}
      </div>
    );
  }
}

export default Directory;
