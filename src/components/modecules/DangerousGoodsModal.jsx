/* eslint-disable react/jsx-props-no-spreading */
import { Grid, Typography } from '@mui/material';
import FirearmsAmmunitionDangerGood from '../../assets/danger-goods-ammunition.png';
import LithiumBatteriesDangerGood from '../../assets/danger-goods-battery.png';
import CorrosivesDangerGood from '../../assets/danger-goods-corrosives.png';
import DryIceDangerGood from '../../assets/danger-goods-dryice.png';
import ExplosiveDangerGood from '../../assets/danger-goods-explosive.png';
import FlammableDangerGood from '../../assets/danger-goods-flammable.png';
import GasesDangerGood from '../../assets/danger-goods-gasses.png';
import InfectiousSubstancesDangerGood from '../../assets/danger-goods-infectious.png';
import MagnetisedMaterialsDangerGood from '../../assets/danger-goods-magnatise.png';
import NarcoticsDangerGood from '../../assets/danger-goods-narcotics.png';
import OxidisingMaterialsDangerGood from '../../assets/danger-goods-oxidising.png';
import OxygenDangerGood from '../../assets/danger-goods-oxygen.png';
import OrganicPeroxidesDangerGood from '../../assets/danger-goods-peroxides.png';
import RadioactiveMaterialsDangerGood from '../../assets/danger-goods-radioactive.png';
import ToxicSubstancesDangerGood from '../../assets/danger-goods-toxic.png';
import ModalHelper from '../atoms/ModalHelper';

const dangerousGoodsItems = [
	{ id: '84a6cf0a-87fd-11ec-a8a3-0242ac120002', src: FirearmsAmmunitionDangerGood, title: 'Firearms' },
	{ id: 'a93d065e-87fd-11ec-a8a3-0242ac120002', src: ExplosiveDangerGood, title: 'Explosives' },
	{ id: 'c4c2b770-87fd-11ec-a8a3-0242ac120002', src: NarcoticsDangerGood, title: 'Narcotics' },
	{ id: 'e20e37fa-87fd-11ec-a8a3-0242ac120002', src: CorrosivesDangerGood, title: 'Corrosives' },
	{ id: 'f4f7ed0c-87fd-11ec-a8a3-0242ac120002', src: FlammableDangerGood, title: 'Flammable' },
	{ id: 'faafc31e-87fd-11ec-a8a3-0242ac120002', src: MagnetisedMaterialsDangerGood, title: 'Magnetised Materials' },
	{ id: '00dadb02-87fe-11ec-a8a3-0242ac120002', src: InfectiousSubstancesDangerGood, title: 'Infectious Substances' },
	{ id: '05b42dd6-87fe-11ec-a8a3-0242ac120002', src: OxygenDangerGood, title: 'Oxygen' },
	{ id: '0a4b301a-87fe-11ec-a8a3-0242ac120002', src: RadioactiveMaterialsDangerGood, title: 'Radioactive Materials' },
	{ id: '0e83c2aa-87fe-11ec-a8a3-0242ac120002', src: ToxicSubstancesDangerGood, title: 'Toxic Substances' },
	{ id: '1c7d0164-87fe-11ec-a8a3-0242ac120002', src: LithiumBatteriesDangerGood, title: 'Lithium Batteries' },
	{ id: '214e510c-87fe-11ec-a8a3-0242ac120002', src: OrganicPeroxidesDangerGood, title: 'Organic Peroxides' },
	{ id: '25ccea68-87fe-11ec-a8a3-0242ac120002', src: OxidisingMaterialsDangerGood, title: 'Oxidising Materials' },
	{ id: '2f2d56ce-87fe-11ec-a8a3-0242ac120002', src: DryIceDangerGood, title: 'Dry-Ice' },
	{ id: '2af4a5bc-87fe-11ec-a8a3-0242ac120002', src: GasesDangerGood, title: 'Gases' },
];

const DangerousGoodsModal = ({ ...props }) => (
	<ModalHelper {...props}>
		<Typography align="center" variant="body1" fontWeight="bold" color="initial">
			Dangerous Goods Declaration Product
		</Typography>

		<Grid container spacing={3} py={3}>
			{dangerousGoodsItems?.map((dangerGood) => (
				<Grid item sm={2.4} key={dangerGood?.id}>
					<img src={dangerGood?.src} alt={`Dangerous Goods - ${dangerGood?.title}`} height={40} width={40} />
					<Typography align="center" variant="caption">
						{dangerGood?.title}
					</Typography>
				</Grid>
			))}
		</Grid>
	</ModalHelper>
);

export default DangerousGoodsModal;
