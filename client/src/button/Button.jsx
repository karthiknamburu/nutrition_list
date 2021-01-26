import React from 'react';

const Button = ({ className = '', ...props }) => {
	const cx = 'bn f6 dim br2 pv3 ph4 white bg-purple ' + className;
	return <button className={cx} {...props} />;
};

export default Button;
