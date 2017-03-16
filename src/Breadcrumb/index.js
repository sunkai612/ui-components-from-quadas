import React, { PropTypes } from 'react';
import Link from 'react-router/lib/Link';

const BreadcrumbItem = (props) => (
  <li {...props}>{props.children}</li>
);

const HomeLink = (props) => {
  if (props.text) {
    return props.children ? <Link to="/">{props.text}</Link> : <span>{props.text}</span>
  }
  return <Link to="/"><i className="fa fa-home"></i></Link>;
};

const Breadcrumb = (props) => (
  <ol className="breadcrumb">
    <BreadcrumbItem className={props.text ? 'bc__fullview' : 'bc__home'}>
      <HomeLink text={props.text} children={props.children}/>
    </BreadcrumbItem>
    {props.children}
  </ol>
);

Breadcrumb.BreadcrumbItem = BreadcrumbItem;

Breadcrumb.propTypes = {
  text: PropTypes.string
};

export default Breadcrumb;
