<script lang="tsx">
import { defineComponent, ref } from 'vue';
import DatePicker               from '@/components/molecules/date-picker/date-picker.vue';
import dayjs                    from 'dayjs';

export default defineComponent({
	components: { DatePicker },
	setup() {
		const dates = ref([ new Date('2021-03-23'), new Date('2021-03-27') ]);
		const isDisabled = (date: Date) => disabledDates.value.find((disabled: Date) => dayjs(disabled).isSame(date, 'day'));

		const disabledDates = ref([
			new Date('2021-03-18'),
			new Date('2021-03-12'),
			new Date('2021-03-19'),
			new Date('2019-04-29'),
			new Date('2021-03-05'),
			new Date('2021-03-13'),
			new Date('2021-03-12'),
			new Date('2021-03-14'),
			new Date('2021-03-11'),
			new Date('2021-04-11'),
			new Date('2021-04-13'),
			new Date('2021-04-12'),
			new Date('2021-04-14'),
			new Date('2021-05-13'),
			new Date('2021-05-12'),
			new Date('2021-05-14'),
			new Date('2021-05-11'),
		]);
		return () => (
			<main>
				<date-picker
					disabled={isDisabled}
					v-model={dates.value}
				/>
			</main>
		);
	},
});
</script>

<style lang="scss">
@import "./src/styles/styles";

#app {
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
}

</style>
