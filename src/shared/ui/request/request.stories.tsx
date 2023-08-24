import Request from './request.component';
import { REQUEST_DATA } from './request.data';
export default {
  title: 'Request',
  component: Request,
};

const Template = () => {
  return <Request data={REQUEST_DATA} />;
};

export const Default = Template.bind({});
