import { mount } from '@vue/test-utils';
import EsReview from '@/src/lib-components/EsReview.vue';
import EsRating from '@/src/lib-components/EsRating.vue';
import EsViewMore from '@/src/lib-components/EsViewMore.vue';
import VerifiedIcon from '@/src/lib-components/icons/verified.vue';
import jestVue from '@/tests/jest.vue.config';

describe('EsReview', () => {
    // Basic test; should exist for most components
    test('<EsReview />', async () => {
        const wrapper = mount(EsReview, {
            ...jestVue,
            propsData: {
                id: 1,
                reviewerName: 'My Name',
                rating: 5,
                comment: 'Nice Proj',
            },
        });
        const a11y = await axe(wrapper.element);

        expect(wrapper.vm).toBeTruthy();
        expect(wrapper.html()).toMatchSnapshot();
        expect(a11y).toHaveNoViolations();
    });

    test('Imported components exist', () => {
        const wrapper = mount(EsReview, {
            ...jestVue,
            propsData: {
                id: 1,
                reviewerName: 'My Name',
                rating: 5,
                comment: 'Nice Proj',
                title: 'Proj Bob',
                certified: true,
            },
        });
        expect(wrapper.findComponent(EsRating).exists()).toBe(true);
        expect(wrapper.findComponent(VerifiedIcon).exists()).toBe(true);

        const esViewMore = wrapper.findComponent(EsViewMore);
        expect(esViewMore.exists()).toBe(true);

        const comment = esViewMore.find('span');
        expect(comment.exists()).toBe(true);
        expect(comment.text()).toContain('Nice Proj');
        expect(wrapper.html()).toMatchSnapshot();
    });

    test('Title and subtext exist', () => {
        const wrapper = mount(EsReview, {
            ...jestVue,
            propsData: {
                id: 1,
                reviewerName: 'Test Bob',
                rating: 5,
                comment: 'Nice Proj',
                title: 'Proj Bob',
            },
        });
        expect(wrapper.find('[data-testid="title-test"]').exists()).toBe(true);
        const subtextTest = wrapper.find('[data-testid="subtext-test"]');
        expect(subtextTest.exists()).toBe(true);
        expect(wrapper.html()).toMatchSnapshot();
    });
});
