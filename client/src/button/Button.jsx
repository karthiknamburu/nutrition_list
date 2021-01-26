import React from 'react';

const Button = ({ className = '', inline , ...props }) => {
	let cx = 'bn f6 dim br2 pv3 ph4 white' + className;
	if(inline){
		cx = cx + ' bg-black'
	} else {
		cx = cx + ' bg-green'
	}
	return <button className={cx} {...props} />;
};

export default Button;
