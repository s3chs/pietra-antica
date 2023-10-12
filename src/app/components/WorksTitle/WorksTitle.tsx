import useDestructureString from '@/app/utils/useDestructureString';

const WorksTitle = () => {
    return (
        <h1 className="works-title">
            {useDestructureString('Nos travaux')}
        </h1>
    );
};

export default WorksTitle;
