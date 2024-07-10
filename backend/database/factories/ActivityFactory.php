<?php

namespace Database\Factories;

use App\Models\Activity;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class ActivityFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Activity::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $desc = "تعد اللغة العربية أقدم اللغات الحية على وجه الأرض، و على اختلاف بين الباحثين حول عمر هذه اللغة؛ لا نجد شكاً في أن العربية التي نستخدمها اليوم أمضت ما يزيد على ألف وستمائة سنة، وقد تكفّل الله - سبحانه و تعالىبحفظ هذه اللغة حتى يرث الله الأرض ومن عليها، قال تعالىإنا نحن نزلنا الذكر و إنا له لحاو، و مذ عصور الإسلام الأولى انتشرت العربية في معظم أرجاء المعمورة وبلغت ما بلغه الإسلام وارتبطت بحياة المسلمين فأصبحت لغة العلم و الأدب والسياسة و الحضارة فضلاً عن كونها لغة الدين والعبادة.لقد استطاعت اللغة العربية أن تستوعب الحضارات المختلفة؛ العربية، والفارسية، واليونانية، والهندية، المعاصرة لها في ذلك الوقت، و أن تجعل منها حضارة واحدة، عالمية المنزع، إنسانية الرؤية، وذلك لأول مرّة في التاريخ، ففي ظل القرآن الكريم أصبحت اللغة العربية لغة عالمية، واللغة الأم لبلاد كثيرة. إن أهمية اللغة العربية تنبع من نواحٍ عدّة؛ أهمها: ارتباطها الوثيق بالدين الإسلامي و القرآن الكريم، فقد اصطفى الله هذه اللغة من بين لغات العالم لتكون لغة كتابه العظيم و لتنزل بها الرسالة الخاتمة إنا أنزلناه قرآنا عربيا لعلكم تعقلون، و من هذا المنطلق ندرك عميق الصلة بين العربية و الإسلام، كما نجد تلك العلاقة على لسان العديد من العلماء ومنهم ابن تيمية حين قال:  معلوم أن تعلم العربية و تعليم العربية فرضٌ على الكفاية ";
        $img1 = 'https://scontent.frak1-1.fna.fbcdn.net/v/t39.30808-6/249274552_391124826038607_8323911830813503295_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFf6_ukul5654fftcY4Xv-utYumhodInaK1i6aGh0idomoV5cAnNqHNWtiyyNMWX73XRrEV3MDyKhz8i9_1F8eB&_nc_ohc=i2otcOhAGowQ7kNvgExFI8C&_nc_ht=scontent.frak1-1.fna&oh=00_AYCpSOtyf27Wl5T5Njf8PUUOmD-uqEZpURB8MrVKuuHzAg&oe=66947931';
        $img2 = 'https://scontent.frak2-1.fna.fbcdn.net/v/t39.30808-6/249247130_391124466038643_2813774160754940343_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHfRQvcRnpYjwvyFv5vYIEw9V3ltdXAz2_1XeW11cDPb3ww7ugpKur4n7nkcF4MrxwAXA6WEBEvmzTn8nRRfFVH&_nc_ohc=Zw23Y6RTUr8Q7kNvgEMaTi1&_nc_ht=scontent.frak2-1.fna&oh=00_AYCHjEY4JALQluXIde06zLw2AAwcejBGFQwOJ-_XJy_xxg&oe=66945725';
        $img3 = 'https://scontent.frak2-2.fna.fbcdn.net/v/t39.30808-6/248647166_389577119526711_1514350221797343409_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEVwUEx4FmO55xXvDjYRrS0RxC0ep9LT8BHELR6n0tPwM7c01jMxZ58KcCO1BREpV9cJsG6IC40qX-csuqwHp-C&_nc_ohc=j2r1X289Cg4Q7kNvgEmrD0E&_nc_ht=scontent.frak2-2.fna&oh=00_AYCbs6oFsYtg5Lx4xSNBD5qwjTAl5Ffc24YBVIXf-wLJGw&oe=669460A9';
        
        return [
            'name' => $this->faker->randomElement([
                'نشاط تنظيف البيئة',
                'ورشة تعليمية للأطفال',
                'ندوة توعوية',
                'حملة زراعة الأشجار',
                'سباق الماراثون الخيري'
            ]),
            'description' => $desc,
            'image' => $this->faker->randomElement([
                $img1,
                $img2,
                $img3
            ]), 
            'date' => $this->faker->dateTimeBetween('-1 year', '+1 year'),
            'location' => $this->faker->randomElement([
                'إمي نكرزي',
                'جماعة ثلاث نيعقوب',
                'إقليم الحوز',
                'مراكش'
            ]),
            'type' => $this->faker->randomElement([
                'تطوعي',
                'توعوي',
                'تعليمي',
                'بيئي',
                'تارفيهي'
            ]),
        ];
    }
}
