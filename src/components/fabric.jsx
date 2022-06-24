import { fabric } from 'fabric';
import { useRef, forwardRef, useCallback, useImperativeHandle, useEffect } from 'react';

const useFabric = (ref) => {
	const canvas = useRef(null);
	useImperativeHandle(ref, () => {
		return canvas.current;
	});
	const fabricRef = useCallback((element) => {
		// if (!element) return canvas.current?.dispose();

		canvas.current = new fabric.Canvas(element, { backgroundColor: '#eee' });
	}, []);
	return fabricRef;
};

const MyFabric = forwardRef((prop, ref) => {
	const fabricRef = useFabric(ref);
	return (
		<canvas
			ref={fabricRef}
			width={400}
			height={230}
		/>
	);
});

MyFabric.displayName = 'fabric';

const Fabric = ({ url }) => {
	const canvas = useRef(null);
	useEffect(() => {
		const json = JSON.parse(url);
		console.log(json);
		(async () => {
			const objects = await new Promise((resolve) =>
				fabric.util.enlivenObjects(json?.objects, resolve),
			);
			canvas.current.add(...objects);
		})();
	}, [canvas]);
	return <MyFabric ref={canvas} />;
};

export default Fabric;
